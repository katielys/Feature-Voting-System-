import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getFeatures, voteFeature } from '../services/api';

export default function FeatureList() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    const data = await getFeatures();
    setFeatures(data);
  };

  const handleVote = async (id) => {
    await voteFeature(id);
    fetchFeatures();
  };

  return (
    <FlatList
      data={features}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Button title="Vote" onPress={() => handleVote(item.id)} />
        </View>
      )}
    />
  );
}
