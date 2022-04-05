import { GET_DATA } from '../actioTypes'
import { createAction } from '@reduxjs/toolkit'

const deleteItemFromList = createAction(GET_DATA.deleteItem)

export default deleteItemFromList
