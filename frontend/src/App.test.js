import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import OrdersPage from './pages/OrdersPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Router><HomePage /></Router>);
  const linkElement = screen.getByTestId("home");
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Router><RegisterPage /></Router>);
  const linkElement = screen.getByTestId("register");
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Router><SignInPage /></Router>);
  const linkElement = screen.getByTestId("signin");
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Router><CartPage /></Router>);
  const linkElement = screen.getByTestId("cart");
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Router><OrdersPage /></Router>);
  const linkElement = screen.getByTestId("orders");
  expect(linkElement).toBeInTheDocument();
});