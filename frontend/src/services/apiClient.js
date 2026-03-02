import axios from 'axios';

// baseURL resolves to REACT_APP_BACKEND_URL/api  or  http://localhost:8001/api
const _origin = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const client = axios.create({
  baseURL: `${_origin}/api/`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Normalize any axios error into a stable object:
 *   { status, code, message, retry_after }
 */
function normalizeError(err) {
  if (err.response) {
    const { status, data } = err.response;
    if (status === 429) {
      return {
        status: 429,
        code: data?.error || 'too_many_requests',
        message: `Too many requests. Please retry in ${data?.retry_after ?? 60} seconds.`,
        retry_after: data?.retry_after ?? 60,
      };
    }
    return {
      status,
      code: data?.error || 'api_error',
      message: data?.detail || 'Something went wrong.',
      retry_after: null,
    };
  }
  if (err.request) {
    return { status: 0, code: 'network_error', message: 'Network error. Check your connection.', retry_after: null };
  }
  return { status: 0, code: 'unknown', message: err.message || 'Unknown error.', retry_after: null };
}

export const submitContact = (data) =>
  client.post('contact', data).catch((err) => { throw normalizeError(err); });

export const subscribeNewsletter = (data) =>
  client.post('newsletter', data).catch((err) => { throw normalizeError(err); });

export const requestBooking = (data) =>
  client.post('booking', data).catch((err) => { throw normalizeError(err); });
