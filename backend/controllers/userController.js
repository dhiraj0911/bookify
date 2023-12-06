const express = require("express");
const bcrypt = require("bcrypt");  // bcrypt is used to hash passwords
const User = require("../models/User");
const 