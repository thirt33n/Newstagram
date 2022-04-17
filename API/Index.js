import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

const api = axios.create({
    baseURL: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4AaP8qvtazEx9QXoQn4LIAlEbcGNpD3M`

})