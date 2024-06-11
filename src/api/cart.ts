import { AUTH_HEADER } from './auth';
import { END_POINT } from './endpoints';
import fetcher from './fetcher';

import {
  AddCartItemParameter,
  CartItemInfo,
  UpdateCartItemQuantityParameter,
} from '@/types/cartItem';

type MutationResponse = Record<'status', number>;

export const fetchCartItems = async (): Promise<CartItemInfo[]> => {
  const response = await fetcher.get({
    url: `${END_POINT.cartItems}?size=2000`,
    headers: AUTH_HEADER,
  });

  const data = await response.json();

  return data.content;
};

export const addCartItem = async ({
  productId,
  quantity = 1,
}: AddCartItemParameter): Promise<MutationResponse> => {
  const response = await fetcher.post({
    url: END_POINT.cartItems,
    headers: AUTH_HEADER,
    body: {
      productId,
      quantity,
    },
  });

  return { status: response.status };
};

export const deleteCartItem = async (cartId: number): Promise<MutationResponse> => {
  const response = await fetcher.delete({
    url: `${END_POINT.cartItems}/${cartId}`,
    headers: AUTH_HEADER,
  });

  return { status: response.status };
};

export const updateItemQuantity = async ({
  cartId,
  quantity,
}: UpdateCartItemQuantityParameter): Promise<MutationResponse> => {
  const res = await fetcher.patch({
    url: `${END_POINT.cartItems}/${cartId}`,
    headers: AUTH_HEADER,
    body: { quantity },
  });

  return { status: res.status };
};
