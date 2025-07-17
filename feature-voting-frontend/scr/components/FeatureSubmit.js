import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { submitFeature } from '../services/api';

export default function FeatureSubmit() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await submitFeature({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder="Feature Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Submit Feature" onPress={handleSubmit} />
    </View>
  );
}
