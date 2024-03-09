// import { configureStore } from "@reduxjs/toolkit";
// import counter_slice from './slices/counter_slice'
import theme from "./slices/themeSlice";
<user_data_slice />

const store = configureStore({
    reducer: {
        // counter: counter_slice,
        // user_data: user_data_slice,
        theme: theme

    }

})


export { store }