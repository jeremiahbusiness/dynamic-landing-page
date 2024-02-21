import axios from 'axios';

// Base URL for the API
const API_URL = process.env.REACT_APP_API_ENDPOINT; // Placeholder URL

/**
 * Centralized function to make HTTP requests using Axios.
 * @param {string} requestType The HTTP method to use ('get', 'post', 'put', 'delete').
 * @param {string} url The URL to which the request is sent.
 * @param {Object|null} data The data to be sent with the request (for POST, PUT methods).
 * @returns {Promise<Object>} The data from the response.
 */
async function makeApiRequest(requestType, url, data = null) {
  try {
    const response = await axios[requestType](url, data);
    return response.data;
  } catch (error) {
    throw new Error(`API request error: ${error.message}`);
  }
}

/**
 * Fetches all database entries for a given mod table.
 * @param {string} modTable The name of the mod table to fetch entries from.
 * @returns {Promise<Object>} The fetched mod data.
 */
export const fetchDBMods = (modTable) => {
  return makeApiRequest('post', `${API_URL}/pullMods/${modTable}`, {});
};

/**
 * Creates a new entry in the specified mod table.
 * @param {Object} modTableData The data for the new mod entry.
 * @param {string} modTable The name of the mod table where the entry will be created.
 * @returns {Promise<Object>} The created mod data.
 */
export const createDBMod = (modTableData, modTable) => {
  return makeApiRequest('post', `${API_URL}/${modTable}`, modTableData);
};

/**
 * Updates an existing mod entry by its ID in the specified mod table.
 * Avoids mutating the input data directly by creating a new data object.
 * @param {string} id The ID of the mod to update.
 * @param {Object} modTableData The updated data for the mod.
 * @param {string} modTable The name of the mod table to update the entry in.
 * @returns {Promise<Object>} The updated mod data.
 */
export const updateDBMod = (id, modTableData, modTable) => {
  const data = { ...modTableData };
  delete data._id; // Remove the _id field if present, to avoid sending it in the request
  return makeApiRequest('put', `${API_URL}/${modTable}/${id}`, data);
};

/**
 * Deletes a mod entry by its ID from the specified mod table.
 * @param {string} id The ID of the mod to delete.
 * @param {string} modTable The name of the mod table where the entry will be deleted.
 * @returns {Promise<void>}
 */
export const deleteDBMod = (id, modTable) => {
  return makeApiRequest('delete', `${API_URL}/${modTable}/${id}`);
};

/**
 * Removes a specific field from a mod entry by its ID in the specified mod table.
 * Assumes a POST request is used for the operation to align with modifying data.
 * @param {string} id The ID of the mod entry to modify.
 * @param {string} fieldName The name of the field to remove.
 * @param {string} modTable The name of the mod table where the entry will be modified.
 * @returns {Promise<Object>} The data from the response after field removal.
 */
export const removeFieldFromDBMod = (id, fieldName, modTable) => {
  const url = `${API_URL}/${modTable}/${id}/remove-key/${fieldName}`;
  // Using 'post' method as a placeholder; change according to your API's requirements
  return makeApiRequest('post', url);
};
