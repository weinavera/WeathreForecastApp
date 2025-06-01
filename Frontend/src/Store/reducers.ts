import {combineSlices} from '@reduxjs/toolkit'
export interface LayzyLoadedSlices{}

export const rootReducer = combineSlices({}).
withLazyLoadedSlices<LayzyLoadedSlices>()