\echo 'Delete and recreate life-tracker db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE lifetracker_regis;
CREATE DATABASE lifetracker_regis;
\connect lifetracker_regis;

\i lifetracker-regis-schema.sql


