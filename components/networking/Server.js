import React, { Component } from 'react'
import { Text, View } from 'react-native'
const apiDATA= 'http://5c0644c8c16e120013947983.mockapi.io/listMovies'
const apiDATA2= 'http://5c0644c8c16e120013947983.mockapi.io/listMovies/'

async function getDataFromServer() {
  try {
    let response = await fetch(apiDATA);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

async function getOneDataFromServer(id) {
  try {
    let response = await fetch(`${apiDATA2}${id}`);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

async function insertNewFromServer(params) {
  try {
    let response = await fetch(apiDATA, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let responseJson = await response.json();
    return responseJson.result;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

async function updateItem(params, id) {
  try {
    let response = await fetch(`${apiDATA2}${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    let responseJson = await response.json();
    return responseJson.result;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

async function deleteItem(id) {
  try {
    let response = await fetch(`${apiDATA2}${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    let responseJson = await response.json();
    return responseJson.result;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

export {getDataFromServer};
export {getOneDataFromServer};
export {insertNewFromServer};
export {updateItem};
export {deleteItem};
