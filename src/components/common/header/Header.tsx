import { useEffect } from 'react';

import * as Styled from './Header.styled';
import ShoppingCartModal from '../ShoppingCartModal';

import { IMAGES } from '@/assets';
import useFetchCartItemsQuery from '@/hooks/queries/cartItems/useFetchCartItemsQuery';

import useModal from '@/hooks/useModal';

const Header = () => {
  const { data: cartItems, isSuccess } = useFetchCartItemsQuery();
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleClickLogo = () => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Styled.Header>
      <Styled.AppTitle onClick={handleClickLogo}>SHOP</Styled.AppTitle>
      <button onClick={handleOpen}>
        {isSuccess && <Styled.ShoppingCartCount>{cartItems.length}</Styled.ShoppingCartCount>}
        <img src={IMAGES.SHOPPING_CART} alt="장바구니" />
      </button>
      {isSuccess && (
        <ShoppingCartModal isOpen={isOpen} onClose={handleClose} cartItems={cartItems} />
      )}
    </Styled.Header>
  );
};

export default Header;
