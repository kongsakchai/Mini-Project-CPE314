--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-03-05 20:37:42

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3320 (class 1262 OID 16398)
-- Name: mosquitto; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE mosquitto WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


\connect mosquitto

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16432)
-- Name: sensordata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sensordata (
    id integer NOT NULL,
    "time" date,
    humidity numeric,
    temperature numeric,
    thermal_array numeric[],
    node_id character(4)
);


--
-- TOC entry 215 (class 1259 OID 16437)
-- Name: SensorData_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.sensordata ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."SensorData_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


-- Completed on 2023-03-05 20:37:42

--
-- PostgreSQL database dump complete
--

