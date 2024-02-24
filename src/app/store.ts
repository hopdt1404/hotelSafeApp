import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import boxReducer from '../redux/boxSlice';

export const store = configureStore({
    reducer: {
        box: boxReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["your/action/type"],
                // Ignore these field paths in all actions
                ignoredActionPaths: ["payload.ref"],
                // Ignore these paths in the state
             },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;