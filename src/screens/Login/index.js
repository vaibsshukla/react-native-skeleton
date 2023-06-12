import React, {useRef} from 'react';
import {Field, reduxForm} from 'redux-form';
import {useDispatch, useSelector} from 'react-redux';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {FormInput, CustomButton} from '../../components';
import {
  passwordRequired,
  emailRequired,
  validatePassword,
  validateEmail,
} from '../../utils/Validations';
import {
  placeholders,
  LOGINFORM_BUTTON,
  SIGNUP_LINK,
  SIGNUP_TEXT,
  LOGIN_REQ_BODY,
} from './constants';
import Colors from '../../res/Palette';
import {useLoginMutation} from '../../api/login';
import {TextInput} from 'react-native-gesture-handler';
import {selectCurrentUser, setUser} from '../../redux/slice/authSlice';
import {Loading} from '../../components/Loading';

const Login = props => {
  const [login, {isLoading, isError}] = useLoginMutation();
  const user = useSelector(selectCurrentUser);

  const passRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = async values => {
    const {data: res, error} = await login(LOGIN_REQ_BODY);

    if (error) {
      console.log(error.data?.message || error.data);
      return;
    }

    dispatch(setUser({...user, ...res}));
  };

  const navigateToRegister = () => props.navigation.navigate('Register');

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.flexOne}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Field
            name="email"
            returnKeyType="next"
            blurOnSubmit={false}
            autoCapitalize="none"
            component={FormInput}
            keyboardType="email-address"
            placeholder={placeholders.EMAIL}
            validate={[emailRequired, validateEmail]}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <TextInput style={{height: 50, width: 100}} />

          <Field
            secureField
            name="password"
            refField={passRef}
            blurOnSubmit={true}
            returnKeyType="done"
            component={FormInput}
            placeholder={placeholders.PASSWORD}
            validate={[passwordRequired, validatePassword]}
            onSubmitEditing={props.handleSubmit(onSubmit)}
          />

          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.success} />
          ) : (
            <CustomButton
              style={styles.button}
              buttonLabel={LOGINFORM_BUTTON}
              onPress={props.handleSubmit(onSubmit)}
            />
          )}

          <View style={styles.signupLinkContainer}>
            <Text style={styles.signuptext}>{SIGNUP_TEXT}</Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={[styles.signuptext, styles.signupLink]}>
                {SIGNUP_LINK}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.errorText}>{isError}</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default reduxForm({
  form: 'login-form',
})(Login);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: scale(25),
  },
  flexOne: {
    flex: 1,
  },
  forgotPass: {
    color: Colors.grey,
    textAlign: 'right',
    marginTop: verticalScale(10),
    fontSize: verticalScale(14),
  },
  button: {
    marginTop: verticalScale(20),
  },
  signupLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  signuptext: {
    fontSize: verticalScale(14),
  },
  signupLink: {
    color: Colors.primary,
  },
  errorText: {
    marginTop: 30,
    color: Colors.error,
    textAlign: 'center',
    fontSize: verticalScale(16),
  },
});
