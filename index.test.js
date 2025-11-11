const request = require('supertest');
const express = require('express');
const nock = require('nock');

// Import the app
const app = require('./index');

describe('CSV to JSON Converter API', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('GET /convert/csv/to/json', () => {
    // it('should convert CSV to JSON successfully', async () => {
    //   const csvData = 'name,age,city\nJohn,30,NYC\nJane,25,LA';
    //   const expectedJson = [
    //     { name: 'John', age: '30', city: 'NYC' },
    //     { name: 'Jane', age: '25', city: 'LA' }
    //   ];

    //   nock('http://example.com')
    //     .get('/test.csv')
    //     .reply(200, csvData, { 'Content-Type': 'text/csv' });

    //   const response = await request(app)
    //     .get('/convert/csv/to/json')
    //     .query({ q: 'http://example.com/test.csv' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toEqual(expectedJson);
    // }, 5000);

    // it('should handle empty CSV', async () => {
    //   nock('http://example.com')
    //     .get('/empty.csv')
    //     .reply(200, '', { 'Content-Type': 'text/csv' });

    //   const response = await request(app)
    //     .get('/convert/csv/to/json')
    //     .query({ q: 'http://example.com/empty.csv' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toEqual([]);
    // });

    it('should handle missing query parameter', async () => {
      const response = await request(app)
        .get('/convert/csv/to/json');

      expect(response.status).toBe(500);
    });

    it('should handle invalid URL', async () => {
      const response = await request(app)
        .get('/convert/csv/to/json')
        .query({ q: 'invalid-url' });

      expect(response.status).toBe(500);
    });

    // it('should handle network errors', async () => {
    //   nock('http://example.com')
    //     .get('/error.csv')
    //     .replyWithError('Network error');

    //   const response = await request(app)
    //     .get('/convert/csv/to/json')
    //     .query({ q: 'http://example.com/error.csv' });

    //   expect(response.status).toBe(500);
    // });
  });
});