import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { ForgotPassword } from '..';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurunuz.');
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('Giriş başarılı:', userCredential.user.uid);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Giriş hatası:', error);
      Alert.alert('Hata', 'Giriş yapılırken bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  const handleRegister = () => {
    console.log('Kayıt sayfasına yönlendiriliyor');
  };

  return (
    <LinearGradient colors={['#1E2F97', '#081158']} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702154.png'
              }}
              style={styles.logo}
            />
            <Text style={styles.title}>Kütüphanem</Text>
            <Text style={styles.subtitle}>Kişisel Kütüphane Asistanınız</Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              placeholderTextColor="#A0A0A0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              placeholderTextColor="#A0A0A0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

         

<TouchableOpacity 
              style={styles.forgotPassword} 
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Şifremi Unuttum?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Hesabınız yok mu? </Text>
             

              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLink}>Kayıt Ol</Text>
                          </TouchableOpacity>



            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;