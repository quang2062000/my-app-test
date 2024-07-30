// src/axios.ts
import axios from 'axios';

// Tạo một instance Axios với cấu hình mặc định
const instance = axios.create({
  baseURL: 'http://localhost:3000', // Thay đổi URL này thành URL của backend của bạn
  timeout: 10000, // Thời gian chờ (timeout) cho yêu cầu
  headers: {
    'Content-Type': 'application/json',
  },
});

// Định nghĩa các interceptor nếu cần
instance.interceptors.request.use(
  (config) => {
    // Thực hiện một số thao tác trước khi yêu cầu được gửi đi
    return config;
  },
  (error) => {
    // Xử lý lỗi trước khi yêu cầu được gửi đi
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Xử lý dữ liệu phản hồi
    return response;
  },
  (error) => {
    // Xử lý lỗi phản hồi
    return Promise.reject(error);
  }
);

export default instance;
