import React from 'react';
import { View } from 'react-native';
import PhoneNumberDisplay from './PhoneNumberDisplay';

const PhoneNumberDisplay = ({ phoneNumber }) => {
  const handlePhoneCall = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  }
}

function PhoneNumberDisplay2(params) {
    
}

