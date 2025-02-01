import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import { styles } from '../styles/toma_tallas.styles';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import data from './data';

export default function SelectPrendas() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Track expanded category
  const [counts, setCounts] = useState<{ [key: string]: number }>({}); // Track counts for each subcategory
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null); // Track selected subcategory for size selection
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({}); // Track selected sizes for each subcategory

  const incrementCount = (subCategory: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [subCategory]: (prevCounts[subCategory] || 0) + 1,
    }));
  };

  const decrementCount = (subCategory: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [subCategory]: Math.max((prevCounts[subCategory] || 0) - 1, 0), // Ensure count doesn't go below 0
    }));
  };

  const handleConfirm = () => {
    // Filter subcategories with counts > 0
    const selectedItems = Object.entries(counts)
      .filter(([_, count]) => count > 0)
      .map(([subCategory, count]) => `${count} x ${subCategory} (${selectedSizes[subCategory] || 'No size selected'})`)
      .join('\n');

    if (selectedItems) {
      // Show an alert with the selected items
      Alert.alert('Confirme con el cliente el pedido', selectedItems, [
        { text: 'OK', onPress: () => console.log('Confirmed') },
      ]);
    } else {
      Alert.alert('No se seleccionaron prendas', 'Por favor selecciona al menos una prenda.');
    }
  };

  const handleSizeSelection = (subCategory: string, size: string) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [subCategory]: size,
    }));
    setSelectedSubCategory(null); // Close the carousel after selection
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden />
      {data.map(({ bg, color, category, subCategories }, index) => {
        const height = useSharedValue(currentIndex === index ? subCategories.length * 50 : 0); // Dynamic height
        const opacity = useSharedValue(currentIndex === index ? 1 : 0); // Control opacity for buttons
        const animatedStyle = useAnimatedStyle(() => ({
          height: withTiming(height.value, { duration: 200, easing: Easing.ease }),
          opacity: withTiming(opacity.value, { duration: 200, easing: Easing.ease }),
        }));

        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index);
              height.value = index === currentIndex ? 0 : subCategories.length * 30;
              opacity.value = index === currentIndex ? 0 : 1; // Toggle opacity for buttons
            }}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.heading, { color }]}>{category}</Text>
              <Animated.View style={[styles.subCategoriesList, animatedStyle]}>
                {subCategories.map((subCategory: string) => {
                  const count = counts[subCategory] || 0; // Get the count for the subcategory
                  return (
                    <View key={subCategory} style={styles.subCategoryItem}>
                      {/* Counter and Subcategory Name */}
                      <Text style={[styles.body, { color }]}>
                        {count} - {subCategory}
                      </Text>

                      {/* "+" and "-" Buttons */}
                      <View style={styles.cartButtons}>
                        <TouchableOpacity
                          onPress={() => decrementCount(subCategory)}
                          style={[styles.cartButton, styles.decrementButton]}
                        >
                          <Text style={styles.cartButtonText}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => incrementCount(subCategory)}
                          style={[styles.cartButton, styles.incrementButton]}
                        >
                          <Text style={styles.cartButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>

                      {/* Button to open size selection */}
                      <TouchableOpacity
                        onPress={() => setSelectedSubCategory(subCategory)}
                        style={styles.sizeButton}
                      >
                        <Text style={styles.sizeButtonText}>
                          {selectedSizes[subCategory] || 'Seleccionar talla'}
                        </Text>
                      </TouchableOpacity>

                      {/* Size Carousel (Only shown when this subcategory is selected) */}
                      {selectedSubCategory === subCategory && (
                        <FlatList
                          horizontal
                          data={['CH', 'MD', 'GD', 'XL']} // Example sizes
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              onPress={() => handleSizeSelection(subCategory, item)}
                              style={styles.sizeItem}
                            >
                              <Text style={styles.sizeItemText}>{item}</Text>
                            </TouchableOpacity>
                          )}
                          keyExtractor={(item) => item}
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={styles.sizeCarousel}
                        />
                      )}
                    </View>
                  );
                })}
              </Animated.View>
            </View>
          </TouchableOpacity>
        );
      })}
      <View>
        <TouchableOpacity style={styles.submitButton} onPress={handleConfirm}>
          <Text style={styles.submitButtonText}>Confirmar Prendas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}