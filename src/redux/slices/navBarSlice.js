import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
/* eslint-disable */

export const fetchData = createAsyncThunk('data/fetchData', async (params) => {
  const { data } = await axios.get('http://localhost:5000/data');
  let update = true;

  const sortDataByManufacturer = [];
  const sortDataByOs = [];
  const sortDataByScreen = [];
  const sortDataByCPU = [];
  const sortDataByRAM = [];
  const sortDataBySSD = [];
  const sortDataByPrice = [];
  const all = [];
  
  const addToSort = (length, categorySort, sortName, massToAdd) => {
    if (length > 0) {
      data.forEach((element) => {
        categorySort.forEach((sort) => {
          if (element[sortName].indexOf(sort) !== -1) {
            massToAdd.push(element);
            update = false;
          }
        });
      });
    }
  };

  const allSorts = () => {
    if (sortDataByManufacturer.length > 0) {
      all.push(sortDataByManufacturer);
    }
    if (sortDataByOs.length > 0) {
      all.push(sortDataByOs);
    }
    if (sortDataByScreen.length > 0) {
      all.push(sortDataByScreen);
    }
    if (sortDataByCPU.length > 0) {
      all.push(sortDataByCPU);
    }
    if (sortDataByRAM.length > 0) {
      all.push(sortDataByRAM);
    }
    if (sortDataBySSD.length > 0) {
      all.push(sortDataBySSD);
    }
    if (sortDataByPrice.length > 0) {
      all.push(sortDataByPrice);
    }
  };

  addToSort(params.manufacturer.length, params.manufacturer, 'manufacturer', sortDataByManufacturer)
  addToSort(params.os.length, params.os, 'os', sortDataByOs)
  addToSort(params.Screen.length, params.Screen, 'Screen', sortDataByScreen)
  addToSort(params.cpu.length, params.cpu, 'cpu', sortDataByCPU)
  addToSort(params.ram.length, params.ram, 'ram', sortDataByRAM)
  addToSort(params.ssd.length, params.ssd, 'ssd', sortDataBySSD)

  data.forEach(element => {
    if(element.price >= Number(params.minPriceValue) && element.price <= Number(params.maxPriceValue)) {
      sortDataByPrice.push(element)
      update = false
    }
  })

  allSorts();
  
  const sortData = _.intersection(...all);
  if (update) return data;

  return sortData;
});

const initialState = {
  isLoading: true,
  laptops: [],
  sortItems: {
    manufacturer: [],
    os: [],
    Screen: [],
    cpu: [],
    ram: [],
    ssd: [],
    minPriceValue: 0,
    maxPriceValue: Infinity
  },
};

function sortCategory(title, checked, prevCategories) {
  let category = [...prevCategories];

  if (checked) {
    category = category.filter((name) => name !== title) || [];
  } else {
    category.push(title);
  }

  return category;
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    sort(state, action) {
      if (action.payload.category === 'Производитель') {
        state.sortItems.manufacturer = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.manufacturer,
        );
      }

      if (action.payload.category === 'Операционная система') {
        state.sortItems.os = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.os,
        );
      }

      if (action.payload.category === 'Тип экрана') {
        state.sortItems.Screen = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.Screen,
        );
      }

      if (action.payload.category === 'Производитель процессора') {
        state.sortItems.cpu = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.cpu,
        );
      }

      if (action.payload.category === 'Объём оперативной памяти') {
        state.sortItems.ram = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.ram,
        );
      }

      if (action.payload.category === 'Общий объем твердотельных накопителей памяти') {
        state.sortItems.ssd = sortCategory(
          action.payload.title,
          action.payload.checked,
          state.sortItems.ssd,
        );
      }

      if(action.payload.category === 'minPriceValue'){
        if(action.payload.value){
          state.sortItems.minPriceValue = action.payload.value
        } else{
          state.sortItems.minPriceValue = 0
        }
      }

      if(action.payload.category === 'maxPriceValue'){
        if(action.payload.value){
          state.sortItems.maxPriceValue = action.payload.value
        } else{
          state.sortItems.maxPriceValue = Infinity
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.laptops = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = false;
      state.laptops = [];
    });
  },
});

export const { sort } = navBarSlice.actions;

export default navBarSlice.reducer;