import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Snackbar, ThemeProvider,
  createTheme,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import Burger from './ComponentHeader/Burger/Burger';
import { Context } from '../../Contex';
import { InputText } from '../../components/Forms/InputText';
import BasicMenu from './ComponentHeader/BasicMenu/BasicMenu';
import { addFormRules } from '../../constans/rules';
import Pulse from '../../components/Pulse/Pulse';
import './Header.css';

export default function Header() {
  const [busketNumber, setBusketNumber] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [busket, setBusket] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [busketNumberCorrect, setBusketNumberCorrect] = useState(0);
  const { cartItems2 } = useContext(Context);

  useEffect(() => {
    const loadCartItems = async () => {
      const cartItems = await localStorage.getItem('cartItems');
      if (cartItems) {
        setBusketNumber(JSON.parse(cartItems).length);
      }
    };
    loadCartItems();
  }, []);

  useEffect(() => {
    setBusketNumberCorrect(cartItems2.length);
    setBusketNumber(prevBusketNumber => prevBusketNumber + cartItems2.length - busketNumberCorrect);
  }, [cartItems2, busketNumber, busketNumberCorrect]);

  const [productWindow, setProductWindow] = useState(false);

  const countDuplicates = (arr, value) => {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].title === value) {
        count += 1;
      }
    }
    return count;
  };

  const touchProduct = () => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const uniqueItems = Array.from(new Set(parsedCartItems.map((item) => item.title)));

      const basketItems = uniqueItems.map((title) => {
        const quantity = countDuplicates(parsedCartItems, title);
        const item = parsedCartItems.find((item) => item.title === title);
        const total = item.price * quantity; // Вычисление суммы для каждого товара
        return { ...item, quantity, total };
      });

      setBusket(basketItems);
    }
    setProductWindow(true);
    document.body.classList.add('body-fixed');
  };

  const updateLocalStorage = (updatedBasket) => {
    const cartItems = updatedBasket.reduce((items, item) => {
      for (let i = 0; i < item.quantity; i += 1) {
        items.push(item);
      }
      return items;
    }, []);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const increaseQuantity = (index) => {
    const updatedBasket = [...busket];
    updatedBasket[index].quantity += 1;
    updatedBasket[index].total = updatedBasket[index].quantity * updatedBasket[index].price;
    setBusket(updatedBasket);
    updateLocalStorage(updatedBasket); // Обновляем данные в локальном хранилище
    setBusketNumber(busketNumber + 1);
  };
  // кнопка минус
  const decreaseQuantity = (index) => {
    const updatedBasket = [...busket];
    if (updatedBasket[index].quantity > 1) {
      updatedBasket[index].quantity -= 1;
      updatedBasket[index].total = updatedBasket[index].quantity * updatedBasket[index].price;
      setBusket(updatedBasket);
      updateLocalStorage(updatedBasket); // Обновляем данные в локальном хранилище
      setBusketNumber(busketNumber - 1);
    }
  };

  const removeItem = (index) => {
    const updatedBasket = [...busket];
    const item = updatedBasket[index];

    // Удаляем все копии товара из корзины
    const updatedBasketWithoutItem = updatedBasket.filter((basketItem) => basketItem.title !== item.title);
    setBusket(updatedBasketWithoutItem);

    // Удаляем все копии товара из локального хранилища
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      const parsedCartItems = JSON.parse(cartItems);
      const updatedCartItems = parsedCartItems.filter((cartItem) => cartItem.title !== item.title);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setBusketNumber(updatedCartItems.length);
    }
  };

  const calculateTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < busket.length; i += 1) {
      total += busket[i].total;
    }
    return total;
  };

  const touchProductClose = () => {
    setProductWindow(false);
    document.body.classList.remove('body-fixed');
  };

  const { control, handleSubmit } = useForm();

  const handleConfirm = (data) => {
    const obj = { post: selectedValue };

    const dataBusket = busket.map((obj) => ({
      article: obj.article,
      name: obj.title,
      quantity: obj.quantity,
      price: obj.price,
      city: obj.city,
      postNumber: obj.department,

    }));

    setLoading(true); // Set loading state to true
    fetch('https://formspree.io/f/mbjebaod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, ...dataBusket, ...obj }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessOpen(true);
          setProductWindow(false);
          localStorage.removeItem('cartItems');
          setBusket([]);
          setBusketNumber(0);
          document.body.classList.remove('body-fixed');
        } else {
          console.log('Ошибка отправки данных');
        }
        setLoading(false);
        return response;
      })
      .catch((error) => {
        console.log('Ошибка отправки данных:', error);
        setLoading(false);
      });
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#f07c00',
      },
    },
  });

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  return (
    <div className='header'>
      <Pulse />
      <div className='header-contacts container'>
        <BasicMenu
          city="м. Запоріжжя"
          addresses={[
            { label: 'вул. Поштова 141-Е', url: 'https://goo.gl/maps/ci2DPZvv62PQytH9A' },
            { label: 'Бульвар Шевченка 16', url: 'https://goo.gl/maps/untzH82HCHdjzH4i7' },
          ]}
          phoneNumbers={['+380676120366', '+380981807080']}
        />
        <BasicMenu
          city="м. Лозова"
          addresses={[
            { label: 'вул. Богданівська 35', url: 'https://goo.gl/maps/hT7zgvGWuNVq3gEY8' },
          ]}
          phoneNumbers={['+380676132880']}
        />
        <BasicMenu
          city="м. Харків"
          addresses={[
            { label: 'вул. Різдвяна 21', url: 'https://goo.gl/maps/3bmo4t72UDWPVEzW7' },
          ]}
          phoneNumbers={['+380676121958']}
        />
        <BasicMenu
          city="м. Городок"
          addresses={[
            { label: 'вул. Грушевського 84/2', url: 'https://goo.gl/maps/pmMV6SjztNN585nq9' },
          ]}
          phoneNumbers={['+380974058748']}
        />
      </div>

      <div className='header-logo container'>
        <div className='header-logo__telephone'>
          <div className='header-language'>
            <div className='header-language__active' href="">UA</div>
            {/* <a className='header-language__en' href="">EN</a>
            <a className='header-language__en' href="">DE</a> */}
          </div>
        </div>
        <a className='header-logo__picture' href="/">
          <img className='header-logo__image' src="./img/logo-spetsvik.svg" alt="logo-spetsvik" />
        </a>
        <div className='header-logo__burger'>
          {/* <div className='burger-search__picture'>
            <img className='burger-search__image' src="./img/logo-search.svg" alt="logo-telephone" />
          </div> */}
          {busketNumber > 0
            ? (
              <div onClick={touchProduct} className='burger-search__basket'>
                <img className='burger-search__basket-image' src="./img/logo-basket.svg" alt="logo-telephone" />
                <div className='burger-basket__number'>{busketNumber}</div>
              </div>
            )
            : (
              <div className='burger-search__basket'>
                <img className='burger-search__basket-image' src="./img/logo-basket.svg" alt="logo-telephone" />
              </div>
            )
          }

          <Burger />
        </div>
      </div>
      <nav className='header-category container'>
        {/* <a className='header-category__item action' href="/">ГОЛОВНА</a> */}
        <a className='header-category__item' href="/spets-cloth">СПЕЦОДЯГ</a>
        <a className='header-category__item' href="/shoes">ВЗУТТЯ</a>
        <a className='header-category__item' href="/fire-safety">ПОЖЕЖНА ПРОДУКЦІЯ</a>
        <a className='header-category__item' href="/military-equipment">ВІЙСЬКОВА ЕКІПІРОВКА</a>
        <a className='header-category__item' href="/shevrons">ШЕВРОНИ</a>
        <a className='header-category__item' href="/fabrics">ТКАНИНИ</a>
        <a className='header-category__item' href="/">ПОЛЮВАННЯ ТА ПРИГОДИ</a>
        <a className='header-category__item' href="/services">ПОСЛУГИ</a>
      </nav>

      {productWindow && <div className='product-window__blur' onClick={touchProductClose}></div>}
      {productWindow && <div className='burger-basket'>
        <img onClick={touchProductClose} className='product-window__close' src="./img/close.png" alt="" />

        <div className='basket-form'>
          <div className='basket-form__box'><div className='basket-form__title'>Ваші дані для замовлення</div></div>

          <InputText
            sx={{ width: '90%' }}
            autoFocus
            margin="dense"
            label="ПІБ"
            type="text"
            variant="outlined"
            rules={addFormRules.name}
            control={control}
            name='name'
          />
          <InputText
            sx={{ width: '90%' }}
            autoFocus
            margin="dense"
            label="E-mail"
            type="text"
            variant="outlined"
            rules={addFormRules.mail}
            control={control}
            name='mail'
          />
          <InputText
            sx={{ width: '90%' }}
            autoFocus
            margin="dense"
            label="Номер телефону"
            type="number"
            variant="outlined"
            rules={addFormRules.number}
            control={control}
            name='number'
          />
          <InputText
            sx={{ width: '90%' }}
            autoFocus
            margin="dense"
            label="Ваше місто"
            type="text"
            variant="outlined"
            rules={addFormRules.city}
            control={control}
            name='city'
          />
          <div className='basket-form__checkbox'>
            <FormControlLabel
              value="Нова Пошта"
              control={
                <Checkbox
                  style={{ color: '#F07C00' }}
                  checked={selectedValue === 'Нова Пошта'}
                />
              }
              label="Нова Пошта"
              labelPlacement="end"
              onChange={handleChange}
            />
            <FormControlLabel
              value="Укр Пошта"
              // control={<Checkbox checked={selectedValue === 'Укр Пошта'} />}
              control={
                <Checkbox
                  style={{ color: '#F07C00' }}
                  checked={selectedValue === 'Укр Пошта'}
                />
              }
              label="Укр Пошта"
              labelPlacement="end"
              onChange={handleChange}
            />
          </div>
          <InputText
            sx={{ width: '90%' }}
            autoFocus
            margin="dense"
            label="Ваше відділення"
            type="number"
            variant="outlined"
            rules={addFormRules.department}
            control={control}
            name='department'
          />
        </div>

        <div className='basket-products'>

          <div className='basket-products__name'>
            <div className='basket-products__title'>Товар</div>
            <div className='basket-products__title'>Кількість</div>
            <div className='basket-products__title'>Сума</div>
          </div>

          <div className="basket-map">

            {busket.map((item, index) => (
              <div key={index} className="basket-products__box">
                <div className="basket-item">
                  <div className="basket-item__picture">
                    <img className="basket-item__img" src={item.img[0]} alt={item.img[0]} />
                  </div>
                  <div className="basket-item__title">{item.title}</div>
                </div>
                <div className="basket-item__actions">
                  <RemoveIcon sx={{ cursor: 'pointer' }} onClick={() => decreaseQuantity(index)}>-</RemoveIcon>
                  <div className='basket-item__quantity'>{item.quantity}</div>
                  <AddIcon sx={{ cursor: 'pointer' }} onClick={() => increaseQuantity(index)}>+</AddIcon>
                </div>
                <div className='basket-item__total'>{item.total} <span className='basket-item__total-span'>UAH</span></div>
                <DeleteForeverIcon sx={{ width: '60px', cursor: 'pointer' }} onClick={() => removeItem(index)}>Удалить</DeleteForeverIcon>
              </div>
            ))}

          </div>

          <div className="basket-summ-button">
            <div className="total-amount">Загальна сума: {calculateTotalAmount()} <span className='basket-item__total-span'>UAH</span></div>
            {isLoading ? (
              <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CircularProgress size={24} color="secondary" />
                  <Button sx={{ backgroundColor: '#F07C00' }} disabled>Зробити замовлення</Button>
                </Box>
              </ThemeProvider>
            ) : (
              <Button
                onClick={handleSubmit(handleConfirm)}
                variant="contained"
                sx={{
                  marginLeft: '0px!important',
                  backgroundColor: '#F07C00',
                  '&:hover': { backgroundColor: '#F07C00', color: 'white !important' },
                }}
              >Зробити замовлення
              </Button>
            )}
          </div>
        </div>

      </div>}

      <Snackbar
        sx={{ BackgroundColor: 'black' }}
        open={successOpen}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert sx={{ сolor: 'black' }} elevation={6} variant="filled" onClose={handleSuccessClose} severity="success">
          Заявка отримана, скоро з Вам зателефонуємо.
        </MuiAlert>
      </Snackbar>
    </div >
  );
}
