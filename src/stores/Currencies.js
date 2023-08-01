import { defineStore } from "pinia";
import { computed, ref } from "vue";
import requests from "../api";

const request = new requests();

const useCurrenciesStore = defineStore("currencies", () => {
  const isLoading = ref(false);
  const currency = ref([]);

  const fetchCurrencies = async () => {
    isLoading.value = true;
    const { data } = await request.loadCurrenciesInfo();
    currency.value = Object.values(data.Valute);
    selectedCurrencyGive.value = currency.value[0].CharCode;
    selectedCurrencyReceive.value = currency.value[1].CharCode;
    isLoading.value = false;
  };

  const searchQuery = ref("");

  const searchResult = computed(() => {
    return currency.value.filter((currency) => {
      return (
        currency.Name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        currency.CharCode.toLowerCase().includes(
          searchQuery.value.toLowerCase()
        )
      );
    });
  });

  const selectedCurrencyGive = ref("");

  const selectedCurrencyReceive = ref("");

  const amountFrom = ref("");

  const amountTo = ref("");

  const typeAmountFrom = (text) => {
    amountFrom.value = text;
  };

  const typeAmountTo = (text) => {
    amountTo.value = text;
  };

  const selectCurrencyGive = (event) => {
    selectedCurrencyGive.value = event.target.value;
    if (amountFrom.value != "") convertCurrency();
  };

  const selectCurrencyReceive = (event) => {
    selectedCurrencyReceive.value = event.target.value;
    if (amountFrom.value != "") convertCurrency();
  };

  const convertCurrency = () => {
    const converted = fx(Number(amountFrom.value))
      .from(selectedCurrencyGive.value)
      .to(selectedCurrencyReceive.value);
    amountTo.value = converted.toFixed(4);
  };

  const swapCurrency = () => {
    const tempCurrency = selectedCurrencyReceive.value;
    selectedCurrencyReceive.value = selectedCurrencyGive.value ;
    selectedCurrencyGive.value = tempCurrency;
    const tempAmount = amountFrom.value;
    amountFrom.value = amountTo.value;
    amountTo.value = tempAmount;
    if (amountFrom.value != "") convertCurrency();
  };

  const filterCurrencyGive = computed(() => {
    return currency.value.filter(
      (option) => option.CharCode != selectedCurrencyReceive.value
    );
  });

  const filterCurrencyReceive = computed(() => {
    return currency.value.filter(
      (option) => option.CharCode != selectedCurrencyGive.value
    );
  });

  return {
    currency,
    isLoading,
    searchQuery,
    searchResult,
    selectedCurrencyGive,
    selectedCurrencyReceive,
    amountFrom,
    amountTo,
    filterCurrencyGive,
    filterCurrencyReceive,
    fetchCurrencies,
    selectCurrencyGive,
    selectCurrencyReceive,
    typeAmountFrom,
    typeAmountTo,
    convertCurrency,
    swapCurrency
  };
});

export default useCurrenciesStore;
