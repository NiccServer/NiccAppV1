  import { StackNavigationProp } from '@react-navigation/stack';
  import { RouteProp } from '@react-navigation/native';

  

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
  'Bordado/reporte_bordado': undefined;
  ListaSolicitudes: undefined;
  'Bordado/ListaSolicitudes': undefined;
  'Bordado/ProcesarBordado': { escuela: string; prenda: string; total: number; restantes: number };
  ProcesarBordado: {
    id: string;
    escuela: string;
    prenda: string;
    total: number;
    restantes: number;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home', 'Toma_Tallas/ticket'>;

export type ProcesarBordadoRouteProp = RouteProp<RootStackParamList, 'ProcesarBordado'>;

export type Props = {
  navigation: HomeScreenNavigationProp;
};
export default {};