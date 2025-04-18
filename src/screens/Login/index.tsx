import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles as sharedStyles} from '../../assets/styles';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/common/Button';
import Link from '../../components/common/Link';
import FormControl from '../../components/common/FormControl';
import useMutation from '../../hooks/useMutation';
import {API_URL} from '../../constants/api';
import Loading from '../../components/common/Loading';
import {ROUTES} from '../../constants/routes';

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {t} = useTranslation('login');
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm<FormData>();
  const {mutate, isLoading, error} = useMutation();

  const onSubmit = (data: FormData) => {
    mutate({
      url: API_URL.LOGIN,
      payload: {email: data.email, password: data.password, type: 'email'},
      onSuccess: () => {
        navigation.navigate(ROUTES.MAIN_TABS as never);
      },
    });
  };

  return (
    <View style={sharedStyles.container}>
      <Text
        style={[sharedStyles.textRed, sharedStyles.size20, styles.loginTitle]}>
        {t('title')}
      </Text>
      {error && (
        <Text style={sharedStyles.errorText}>
          {t('email.invalidEmailOrPassword')}
        </Text>
      )}
      <FormControl<FormData>
        control={control}
        name="email"
        placeholder={t('email.placeholder')}
        keyboardType="email-address"
        isRequired
        isEmail
        isError={!!error}
      />

      <FormControl<FormData>
        control={control}
        name="password"
        placeholder={t('password.placeholder')}
        secureTextEntry
        isRequired
        isPassword
        isError={!!error}
      />

      <Button onPress={handleSubmit(onSubmit)} title={t('submit')} />

      <View style={sharedStyles.linkContainer}>
        <Link
          onPress={() => navigation.navigate('ResetPassword' as never)}
          title={t('forgotPassword')}
        />
        <Link
          onPress={() => navigation.navigate('Register' as never)}
          title={t('register')}
        />
      </View>

      <Loading visible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    marginBottom: 20,
  },
});

export default LoginScreen;
