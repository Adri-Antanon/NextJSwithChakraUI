"use strict";

//Set ENV to 'prod' for production envoironment
//Set ENV to 'test' for test envoironment
//const ENV = 'test';
import { ENV } from "./config";
import { API_DEV_URL, API_PROD_URL } from "./constants";

function getBaseURL() {
    if (ENV == "prod") {
        return API_PROD_URL;
    } else {
        return API_DEV_URL;
    }
}

function parseUrl(url, params) {
    let fullUrl = getBaseURL() + url;
    let i = 0;
    if (params) {
        for (let key in params) {
            if (i == 0) {
                fullUrl += "?" + key + "=" + params[key];
            } else {
                fullUrl += "&" + key + "=" + params[key];
            }
            i++;
        }
    }
    return fullUrl;
}

export const API = {
    getSignupURL: () => {
        return parseUrl("auth/register");
    },

    getLoginURL: () => {
        return parseUrl("auth/login");
    },

    getMeURL: () => {
        return parseUrl("users/me");
    },
};

module.exports = API;
