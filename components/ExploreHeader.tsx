import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { useRef, useState } from 'react';
import Colors from '@/constants/Colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';

const categories = [
  {
    name: 'Trending',
    icon: 'local-fire-department',
  },
  {
    name: 'Homestels',
    icon: 'home',
  },
  {
    name: 'Hostels',
    icon: 'apartment',
  },
  {
    name: 'Campus',
    icon: 'school',
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 5, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={{ fontFamily: 'mon-b',
            padding: 10,textAlign:'center'
          }}>
            KWAME NKRUMAH UNIVERSITY OF SCIENCE & TECHNOLOGY
          </Text>
        </View>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
              <AntDesign name="search1" size={24} />
                <View>
                  <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                  <Text style={{ color: Colors.grey, fontFamily: 'mon' }}>Anywhere · Any week · Anytime</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 40,
            paddingHorizontal: 23,
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => selectCategory(index)}
              key={index}
              ref={(el) => itemsRef.current[index] = el}
              style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
              >
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={activeIndex === index ? '#000' : Colors.grey}
              />
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText} >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </GestureHandlerRootView>
      </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 6,
    height: 180,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 15,
    },
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 14,
  },

  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    alignItems: 'center',
    width: 320,
    height: 55,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  categoryText: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 6,
  },
});

export default ExploreHeader;
