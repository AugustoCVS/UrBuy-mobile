import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "src/context/AuthContext/auth.context";
import { IPurchase } from "src/services/interfaces/purchase";
import { PurchaseService } from "src/services/purchase";
import { useMessage } from "src/utils/message";
import { ERROR_MESSAGE } from "./utils";

export const useHistoric = () => {
  const { states } = useContext(AuthContext);
  const { showToast } = useMessage();

  const [searchValue, setSearchValue] = useState<string>("");
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    setSearchValue(text);
  };

  const handleGetAllPurchases = useCallback(async () => {
    setLoading(true);
    await PurchaseService.getAllPurchases({
      userId: states.user?.id,
      name: searchValue,
    })
      .then((res) => {
        setPurchases(res);
      })
      .catch(() => {
        showToast({ title: ERROR_MESSAGE, error: true})
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

  useEffect(() => {
    handleGetAllPurchases();
  }, [searchValue]);

  return {
    states: {
      searchValue,
      purchases,
      loading,
    },
    actions: {
      onChangeText,
    },
  };
};
