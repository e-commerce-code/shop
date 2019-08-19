import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, Container, Alert } from 'reactstrap';

constructor(props) {
    super(props);
    this.state = {
      title: '',
      color: '',
      size: '',
      tags: '',
      images: '',
      description: '',
      price: 0,
      modalEdit: false,
      success: false
    };
  }
