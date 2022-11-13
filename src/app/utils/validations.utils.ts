import {Validators} from "@angular/forms";

export const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
export const CodeRegExp = /^[\d]{4}$/
export const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const CompanyNamePattern = /^[А-Яа-яёA-Za-z]+$/i;

export const PhoneNumberValidator = [
  Validators.required,
  Validators.minLength(16)
]

export const PasswordValidator = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(15),
  Validators.pattern(PasswordRegExp)
];

export const CodeValidator = [
  Validators.required,
  Validators.pattern(CodeRegExp)
]

export const EmailValidator = [
  Validators.required,
  Validators.pattern(EmailRegExp)
]

export const CompanyNameValidator = [
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(CompanyNamePattern)
];
