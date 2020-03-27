import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  COLOR,
  ThemeContext,
  getTheme,
  withTheme,
  ListItem,
  BottomNavigation,
  Button,
} from 'react-native-material-ui';
import light from 'react-native-material-ui/src/styles/themes/light';
import Footer from './src/components/Footer';

const uiTheme = {
  ...light,
  palette: {
    ...light.palette,
    accentColor: COLOR.amber900,
  },
};

const App = () => {
  return (
    <>
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <ListItem
              divider
              centerElement={{
                primaryText: 'Primary text',
              }}
              onPress={() => {}}
            />
            <Button primary text="Primary" />
            <Button raised primary text="raised Primary" />
            <Button
              accent
              text="Accent"
              style={{container: {backgroundColor: COLOR.brown900}}}
            />
          </View>
        </ScrollView>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
