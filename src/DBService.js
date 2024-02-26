import axios from 'axios';

// Base URL for the API
const API_URL = process.env.REACT_APP_API_ENDPOINT; // Placeholder URL

/**
 * Centralized function to make HTTP requests using Axios.
 * @param {string} method The HTTP method to use ('get', 'post', 'put', 'delete').
 * @param {string} url The URL to which the request is sent.
 * @param {Object|null} data The data to be sent with the request (for POST, PUT methods).
 * @returns {Promise<Object>} The data from the response.
 */
async function makeApiRequest(method, url, data = null) {
  try {
    const response = await axios[method](url, data);
    return response.data;
  } catch (error) {
    throw new Error(`API request error: ${error.message}`);
  }
}

/**
 * Fetches all database entries for a given mod table.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table to fetch entries from.
 * @returns {Promise<Object>} The fetched mod data.
 */
export const fetchMods = (modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  return makeApiRequest('get', `${API_URL}/mods/${modType}`);
};

/**
 * Creates a new entry in the specified mod table.
 * @param {Object} modData The data for the new mod entry.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be created.
 * @returns {Promise<Object>} The created mod data.
 */
export const createMod = (modData, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  return makeApiRequest('post', `${API_URL}/mods/${modType}`, modData);
};

/**
 * Retrieves a specific mod entry by its ID from the specified mod table.
 * @param {string} id The ID of the mod entry to retrieve.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be retrieved from.
 * @returns {Promise<Object>} The retrieved mod data.
 */
export const retrieveMod = (id, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  return makeApiRequest('get', `${API_URL}/mods/${modType}/${id}`);
};

/**
 * Updates an existing mod entry by its ID in the specified mod table.
 * Avoids mutating the input data directly by creating a new data object.
 * @param {string} id The ID of the mod to update.
 * @param {Object} modData The updated data for the mod.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table to update the entry in.
 * @returns {Promise<Object>} The updated mod data.
 */
export const updateMod = (id, modData, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  const data = { ...modData };
  delete data._id; // Remove the _id field if present, to avoid sending it in the request
  return makeApiRequest('post', `${API_URL}/mods/${modType}/${id}`, data);
};

/**
 * Updates a specific field within a mod entry by its ID in the specified mod table.
 * @param {string} id The ID of the mod entry to update.
 * @param {string} fieldName The name of the field to update.
 * @param {*} fieldValue The new value for the field.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be updated.
 * @returns {Promise<Object>} The updated mod data.
 */
export const updateFieldInMod = (id, fieldName, fieldValue, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {

  const data = { key: fieldName, newValue: fieldValue };

  console.log(id);
  console.log(data);
  return makeApiRequest('post', `${API_URL}/mods/${modType}/${id}/update-field`, data);
};

/**
 * Deletes a mod entry by its ID from the specified mod table.
 * @param {string} id The ID of the mod to delete.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be deleted.
 * @returns {Promise<void>}
 */
export const deleteMod = (id, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  return makeApiRequest('delete', `${API_URL}/mods/${modType}/${id}`);
};

/**
 * Removes a specific field from a mod entry by its ID in the specified mod table.
 * @param {string} id The ID of the mod entry to modify.
 * @param {string} fieldName The name of the field to remove.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be modified.
 * @returns {Promise<Object>} The data from the response after field removal.
 */
export const removeFieldFromMod = (id, fieldName, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  return makeApiRequest('post', `${API_URL}/mods/${modType}/${id}/remove-field/${fieldName}`);
};

/**
 * Changes a specific key within a mod entry by its ID in the specified mod table.
 * @param {string} id The ID of the mod entry to modify.
 * @param {string} oldKey The old key to change.
 * @param {string} newKey The new key.
 * @param {string} [modType=REACT_APP_PROJECT_MODTYPE] The name of the mod table where the entry will be modified.
 * @returns {Promise<Object>} The updated mod data.
 */
export const updateKeyInMod = (id, oldKey, newKey, modType = process.env.REACT_APP_PROJECT_MODTYPE) => {
  const data = { oldKey, newKey };
  
  retrieveMod(id).then((modData) => {

    function updateNestedKey(obj, keyToUpdate, newValue) {
      const keys = keyToUpdate.split('.');
      let current = obj;
      
      // Traverse the object until the second last key
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== 'object') {
          // If the intermediate key is missing or not an object, return the original object
          return obj;
        }
        
        current = current[key];
      }
      
      // Get the last key
      const lastKey = keys[keys.length - 1];
      
      // Check if the last key exists in the object
      if (current[lastKey] !== undefined) {
        // Create a new key with the new value and delete the old key
        current[newValue] = current[lastKey];
        delete current[lastKey];
      }
      
      return obj;
    }
    
     modData = updateNestedKey(modData, oldKey, newKey);
     
     console.log(modData);
     removeFieldFromMod(id, oldKey)
     //deleteMod(id).then(() => {
//
       updateMod(id, modData)
       
     //})
   })



};

