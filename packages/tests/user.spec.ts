import { describe, expect, it } from 'vitest';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';
const PHONE_NUMBER_1 = '7005415618';
const NAME_1 = 'Rituraj';

describe("Signup Endpoint", () => {
  it("double signup doesn't work", async () => {
    // 1st signup - should be OK
    const response1 = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      phone: PHONE_NUMBER_1,
    });

    // OTP verification - assume success
    const response2 = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      name: NAME_1,
      otp: "000000",
    });

    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response1.data.id).not.toBeNull();

   // Second signup attempt with same phone - should reject with "User already exists"
    await expect(
      axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        phone: PHONE_NUMBER_1,
      })
    ).rejects.toThrow('User already exists');
  });
});
