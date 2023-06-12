import {createApi} from '@reduxjs/toolkit/query/react';
import {resetAction} from '../../redux/store';
import {axiosBaseQuery, baseURL} from './axiosBaseQuery';
import CheckConnection from '../../utils/CheckInternet';

const baseQuery = axiosBaseQuery({
  baseUrl: baseURL,
  // prepareHeaders: (headers, {getState}) => {
  //   const {token} = getState().auth;
  //   if (token) {
  //     headers.authorization = `Bearer ${token}`;
  //   }
  //   return headers;
  // },
});

// logout if get 401 "Unauthorized"
const baseQueryWithLogoutOnUnauthorized = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (
    result?.error?.status === 401 ||
    result?.error?.data?.statusCode === 401 ||
    result?.error?.data?.message === 'TokenExpiredError'
  ) {
    api.dispatch(resetAction());
  }
  return result;
};

export const tagTypes = {
  auth: 'auth',
  dashboard: 'dashboard',
  admins: 'admin-users',
  appUsers: 'app-users',
  appUserPets: 'app-user-pets',
  appUserBookings: 'app-user-bookings',
  serviceCategories: 'service-categories',
  serviceProviders: 'service-providers',
  subscriptions: 'subscriptions',
  subscribedUsers: 'subscribedUsers',
  services: 'services',
  activities: 'activities',
  bookings: 'bookings',
  earnings: 'earnings',
  vouchers: 'vouchers',
  ratingAndReviews: 'rating-reviews',
  blogs: 'blogs',
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithLogoutOnUnauthorized,
  // keepUnusedDataFor is used for cache in secounds, default value is 60
  keepUnusedDataFor: 1,
  endpoints: () => ({}),
  tagTypes: Object.values(tagTypes),
  refetchOnReconnect: true,
});
