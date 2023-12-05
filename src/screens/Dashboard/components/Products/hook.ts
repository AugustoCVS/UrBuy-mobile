import { useToast } from "native-base";

export const useProducts = () => {
  const toast = useToast();

  const featureInDevelopment = () => {
    toast.show({
      title: "Funcionalidade em desenvolvimento",
      placement: "top",
    });
  };

  return {
    actions: {
      featureInDevelopment,
    },
  };
};
