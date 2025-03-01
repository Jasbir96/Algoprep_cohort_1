//  route test  -> extra library 
const request = require('supertest');
const express = require('express');
const UserRouter = require('../Routers/UserRouter');
const { protectRouteMiddleWare } = require('../controllers/AuthController');
const { getUserWishlist } = require('../controllers/UserController');

// Mock the middleware and controllers
jest.mock('../controllers/AuthController', () => ({
    protectRouteMiddleWare: jest.fn((req, res, next) => next())
}));

jest.mock('../controllers/UserController', () => ({
    getUserWishlist: jest.fn(),
}));

// Create express app for testing
const app = require("../../api.js")

describe('UserRouter', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /wishlist', () => {
        it('should return wishlist when authorized', async () => {
            //input
            // Mock successful middleware authentication
            protectRouteMiddleWare.mockImplementation((req, res, next) => next());

            // Mock wishlist response
            const mockWishlist = [{ id: 1, title: 'Movie 1' }];
            getUserWishlist.mockImplementation((req, res) => {
                res.status(200).json({ wishlist: mockWishlist });
            });

            // run 
            const response = await request(app).get('/api/user/wishlist');

            // verify
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ wishlist: mockWishlist });
            expect(getUserWishlist).toHaveBeenCalled();
        });

        it('should handle errors in getUserWishlist', async () => {
            // Mock successful middleware authentication
            protectRouteMiddleWare.mockImplementation((req, res, next) => next());

            // Mock error in getUserWishlist
            getUserWishlist.mockImplementation((req, res) => {
                res.status(500).json({ message: 'Internal server error' });
            });
            // run 
            const response = await request(app).get('/api/user/wishlist');
            // 

            expect(response.status).toBe(500);
            expect(response.body).toEqual({ message: 'Internal server error' });
        });
    });
});