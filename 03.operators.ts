import Employee from './types'

var Configuration = {
  API: "http://host/path/to/api",
  token: "jw3t-4w4j-5t04-5jt0-445t-fe98",
  locale: "en-us",
  language: "en",
  currency: "USD",
  modules: ["admin", "orders", "stock"]
}

// 🚀 EXERCISE: extract the config type from existing object
type Config = typeof Configuration



type Nationality = "US" | "UK" | "FR" | "DE" | "NL" | "PL" | "IT" | "ES";

type BenefitServiceType = "lunch-card" | "healthcare" | "sport-system" | "cafeteria.io";

type DateString = string;
type Phone = string;
// compare the two:
type Money = number;
// export type Money = number & {}

type Skill = string;

type ContractType = "contract" | "permanent";

type Employee = {
  "id": number;
  "nationality": Nationality,
  "departmentId": number;
  "keycardId": string;
  "account": string;
  "salary": Money;
  "office": [string, string];
  "firstName": string;
  "lastName": string;
  "title": string;
  "contractType": ContractType;
  "email": Email;
  "hiredAt": DateString;
  "expiresAt": DateString;
  "personalInfo": {
    "age": number;
    "phone": Phone;
    "email": Email;
    "dateOfBirth": DateString;
    "address": {
      "street": string;
      "city": string;
      "country": string;
    };
  },
  "skills": Skill[];
  "bio": string;
};
