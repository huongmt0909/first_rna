import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import {styles as sharedStyles} from '../../../assets/styles';
import {useTranslation} from 'react-i18next';
import {regex} from '../../../constants/regex';
import Icon from 'react-native-vector-icons/Ionicons';

interface FormControlProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  isRequired?: boolean;
  isEmail?: boolean;
  isPassword?: boolean;
  minLength?: number;
  maxLength?: number;
  customRules?: RegisterOptions<T, Path<T>>;
  isError?: boolean;
}

const FormControl = <T extends FieldValues>({
  control,
  name,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  isRequired,
  isEmail,
  isPassword,
  minLength,
  maxLength,
  customRules,
  isError,
}: FormControlProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const {t} = useTranslation('components');

  const generateRules = (): RegisterOptions<T, Path<T>> => {
    const rules: RegisterOptions<T, Path<T>> = {
      ...(customRules || {}),
    };

    if (isRequired) {
      rules.required = t('formControl.validation.required');
    }

    if (isEmail) {
      rules.pattern = {
        value: regex.email,
        message: t('formControl.validation.email'),
      };
    }

    if (isPassword) {
      rules.minLength = {
        value: 6,
        message: t('formControl.validation.password.minLength'),
      };
    }

    if (minLength) {
      rules.minLength = {
        value: minLength,
        message: t('formControl.validation.minLength', {length: minLength}),
      };
    }

    if (maxLength) {
      rules.maxLength = {
        value: maxLength,
        message: t('formControl.validation.maxLength', {length: maxLength}),
      };
    }

    return rules;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={generateRules()}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                sharedStyles.input,
                (error || isError) && styles.inputError,
                isPassword && styles.passwordInput,
              ]}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={isPassword && !showPassword}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
            />
            {isPassword && (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={togglePasswordVisibility}>
                <Icon
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={sharedStyles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  inputError: {
    borderColor: 'red',
  },
  passwordInput: {
    paddingRight: 50, // Để icon không đè lên text
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{translateY: -12}],
  },
});

export default FormControl;
