  import { StackNavigationProp } from '@react-navigation/stack';
  

export type RootStackParamList = {
  Home: undefined;
  Index: undefined;
  index: undefined;
  product_form: undefined;
  Bordado: undefined;
 'Toma_Tallas/toma_tallas': undefined;
 'Toma_Tallas/prendas':undefined;
 'Toma_Tallas/select_prendas':undefined;
 'Toma_Tallas/ticket': { selectedItems: { subCategory: string; count: number }[] };
 'Bordado/Bordado' :undefined;
 'Bordado/solicitud_bordado': undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home', 'Toma_Tallas/ticket'>;


export type Props = {
  navigation: HomeScreenNavigationProp;
};
