import React, { Component } from 'react';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility';

import me from './img_2.min.jpg';

export default class HomepageLayout extends Component {
  render() {
    return (
      <div>
        <Visibility once={false}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Image
                src={me}
                centered
                bordered
                shape="circular"
                size="small"
                style={{
                  marginBottom: 0,
                  marginTop: '3em'
                }}
              />
              <Header
                as="h1"
                content="Pedro Jimenez"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'bold',
                  marginBottom: 0
                }}
              />
              <Header
                as="h2"
                content="Full Stack Developer"
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              About me
            </Header>
            <code style={{ fontSize: '1.33em' }}>
              Hi, How are you, I hope great! :D
              <p>I am a system engineer and I'm a fan of new technologies.</p>
              <p>
                I have a Bachelor of Systems Engineering and telecommunications
                from the University of Cordoba.
              </p>
              <p>
                I've been developing for 5 about years and 3 years working in
                personal and contracted projects.
              </p>
            </code>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">My Skills</a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>
              I have experience in:
            </Header>
            <code style={{ fontSize: '1.33em' }}>
              <ul>
                <li>
                  Programming languages
                  <ul>
                    <li>Javascript</li>
                    <li>Go</li>
                  </ul>
                </li>
                <li>
                  Web Develpment
                  <ul>
                    <li>
                      Frontend
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>
                          Javascript
                          <ul>
                            <li>JQuery</li>
                            <li>
                              ReactJs Ecosystem
                              <ul>
                                <li>React</li>
                                <li>React Router</li>
                                <li>Redux</li>
                                <li>Redux Saga</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Backend
                      <ul>
                        <li>
                          NodeJS
                          <ul>
                            <li>ExpressJs</li>
                            <li>HapiJs</li>
                          </ul>
                        </li>
                        <li>Go</li>
                      </ul>
                    </li>
                    <li>
                      Databases
                      <ul>
                        <li>MySql</li>
                        <li>
                          Oracle (Basic experience, but I'm currently working
                          with it)
                        </li>
                        <li>MongoDB</li>
                      </ul>
                    </li>
                    <li>
                      Testing
                      <ul>
                        <li>Unit testing</li>
                        <li>TDD</li>
                      </ul>
                    </li>
                  </ul>
                  <ul />
                </li>
                <li>Microservices</li>
              </ul>
              <p>I have good skills in the creation of algorithms.</p>
              <p>
                Thank you for viewing my profile and write me a tweet if you
                need help ;)
              </p>
            </code>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable centered>
              <Grid.Row>
                <Grid.Column width={12} textAlign="center">
                  © 2017 pedrojimenezp.com all rights reserved
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
