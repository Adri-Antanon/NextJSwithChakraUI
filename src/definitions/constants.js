export const ACCESS_TOKEN = "localStorage@token";
export const REFRESH_TOKEN = "localStorage@refreshToken";

let s3 = "";
if (process.env.NODE_ENV == "production") {
    s3 = "https://d35qvi4tk0ackb.cloudfront.net/";
} else if (process.env.NODE_ENV == "development") {
    s3 = "https://s3-eu-west-1.amazonaws.com/futbar-dev/";
} else if (process.env.NODE_ENV == "test") {
    s3 = "https://s3-eu-west-1.amazonaws.com/futbar-dev/";
} else {
    s3 = "https://s3-eu-west-1.amazonaws.com/futbar-dev/";
}

export const S3 = s3;

export const USER_PHOTOS_THUMBNAIL = S3 + "user/photos/thumbnail/";
export const USER_PHOTOS_SMALL = S3 + "user/photos/small/";
export const USER_PHOTOS_MEDIUM = S3 + "user/photos/medium/";
export const USER_PHOTOS_LARGE = S3 + "user/photos/large/";
export const USER_PHOTOS = S3 + "user/photos/";

export const API_PROD_URL =
    "http://ec2-52-31-158-41.eu-west-1.compute.amazonaws.com/api/";
export const API_DEV_URL =
    "http://ec2-52-31-158-41.eu-west-1.compute.amazonaws.com/api/";
