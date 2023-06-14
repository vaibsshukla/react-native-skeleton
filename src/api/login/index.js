import {apiSlice, tagTypes} from '../base';

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/products/category/jewelery`,
        method: 'GET',
      }),
    }),

    getAuthUser: builder.query({
      query: () => ({
        url: '/products/category/jewelery',
        method: 'GET',
      }),
      providesTags: () => [{type: tagTypes.auth, id: 'auth-user'}],
      transformResponse: response => ({
        data: response,
      }),
    }),
    getAuthUserTemp: builder.query({
      query: () => ({
        url: '/products/category/jewelery',
        method: 'GET',
      }),
      transformResponse: response => ({
        data: response,
      }),
    }),

    editProfile: builder.mutation({
      query: body => ({
        url: `admin/user`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: () => [{type: tagTypes.auth, id: 'auth-user'}],
    }),

    forgetPassword: builder.mutation({
      query: ({email}) => ({
        url: `admin/user/auth/forget/${email}`,
        method: 'GET',
      }),
    }),

    resetPassword: builder.mutation({
      query: body => ({
        url: `admin/user/forget/changePassword`,
        method: 'POST',
        body,
      }),
    }),

    changePassword: builder.mutation({
      query: body => ({
        url: `admin/user/change/password`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetAuthUserTempQuery,
  useGetAuthUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useEditProfileMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApi;

export default authApi;
