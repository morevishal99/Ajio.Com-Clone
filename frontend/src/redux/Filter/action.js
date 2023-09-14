import axios from "axios";

import {
  GET_BRAND ,
 GET_CATEGORY ,
 GET_SEARCHVALUE ,
 GET_CURRENTPAGE ,
 GET_PRICE ,
 GET_FABRIC ,
 GET_RATING,
} from "./action.Type";

export const getSearchValue = () => {
  return {
    type: GET_SEARCHVALUE,
  };
};

export const getBrandValue = (payload, category) => {
  return {
    type: GET_BRAND,
    payload,
    category: category,
  };
};

export const getRequestFailureAdminSide = () => {
  return {
    type: GET_REQUEST_FAILURE_ADMIN_SIDE,
  };
};

export const patchRequestAdminSide = () => {
  return {
    type: PATCH_REQUEST_ADMIN_SIDE,
  };
};

export const patchRequestSuccessAdminSide = () => {
  return {
    type: PATCH_REQUEST_SUCCESS_ADMIN_SIDE,
  };
};

export const patchRequestFailureAdminSide = () => {
  return {
    type: PATCH_REQUEST_FAILURE_ADMIN_SIDE,
  };
};

