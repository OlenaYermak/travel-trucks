

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import clsx from "clsx";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button.jsx";
import style from "./ReservationForm.module.css";

import { enGB } from "date-fns/locale";
registerLocale("enGB", enGB);

const ReservationForm = () => {
  const [isDatePickerFocused, setIsDatePickerFocused] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        dateRange: [null, null],
        comment: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        dateRange: Yup.array()
          .of(Yup.date().nullable())
          .required("Required")
          .test(
            "date-range",
            "Please select both start and end dates",
            (dates) => {
              const [startDate, endDate] = dates;
              return startDate && endDate && startDate <= endDate;
            }
          ),
        comment: Yup.string().min(3, "Too short").max(256, "Too long"),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          toast.success("Date sent successfully!", { className: style.toast });
          resetForm();
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={style.form}>
          <div className={style.reservedFormFieldWrapper}>
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className={style.input}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={style.errorMsg}
            />
          </div>

          <div className={style.reservedFormFieldWrapper}>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className={style.input}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={style.errorMsg}
            />
          </div>

          <div className={style.reservedFormFieldWrapper}>
            <DatePicker
              selected={values.dateRange[0]}
              onChange={(dates) => setFieldValue("dateRange", dates)}
              startDate={values.dateRange[0]}
              endDate={values.dateRange[1]}
              selectsRange
              dateFormat="dd/MM/yyyy"
              locale="enGB"
              placeholderText={
                isDatePickerFocused
                  ? "Select a date between today"
                  : "Select date range*"
              }
              onFocus={() => setIsDatePickerFocused(true)}
              onBlur={() => setIsDatePickerFocused(false)}
              className={clsx(style.input, style.datePicker)}
            />
            <ErrorMessage
              name="dateRange"
              component="span"
              className={style.errorMsg}
            />
          </div>

          <div className={style.reservedFormFieldWrapper}>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={style.textarea}
            />
          </div>

          <Button text={"Send"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
