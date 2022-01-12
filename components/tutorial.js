import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableWithoutFeedbackBase, TouchableWithoutFeedback, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const JavaScriptTutorial=[
  { id:0,name:'Setup For JavaScript', link:'https://linuxhint.com/set-up-visual-studio-code-for-javascript/#:~:text=%20How%20to%20setup%20Visual%20Studio%20Code%20for,applications%20and%20web%20pages%20dynamic%20and...%20More%20', o:true },
  { id:1, name:'JS Home', link:'https://www.w3schools.com/js/default.asp', o:false },
  { id:2, name:'JS Introduction', link:'https://www.w3schools.com/js/js_intro.asp', o:false },
  { id:3, name:'JS Where To', link:'https://www.w3schools.com/js/js_whereto.asp', o:false },
  { id:4, name:'JS Output', link:'https://www.w3schools.com/js/js_output.asp', o:false },
  { id:5, name:'JS Statements', link:'https://www.w3schools.com/js/js_statements.asp', o:false },
  { id:6, name:'JS Syntax', link:'https://www.w3schools.com/js/js_syntax.asp', o:false },
  { id:7, name:'JS Comments', link:'https://www.w3schools.com/js/js_comments.asp', o:false },
  { id:8, name:'JS Variable', link:'https://www.w3schools.com/js/js_variables.asp', o:false },
  { id:9, name:'JS Let', link:'https://www.w3schools.com/js/js_let.asp', o:false },
  { id:10, name:'JS Const', link:'https://www.w3schools.com/js/js_const.asp', o:false },
  { id:11, name:'JS Operator', link:'https://www.w3schools.com/js/js_operators.asp', o:false },
  { id:12, name:'JS Arithmetic', link:'https://www.w3schools.com/js/js_arithmetic.asp', o:false },
  { id:13, name:'JS Assignment', link:'https://www.w3schools.com/js/js_assignment.asp', o:false },
  { id:14, name:'JS Data Type', link:'https://www.w3schools.com/js/js_datatypes.asp', o:false },
  { id:15, name:'JS Function', link:'https://www.w3schools.com/js/js_functions.asp', o:false },
  { id:16, name:'JS Object ', link:'https://www.w3schools.com/js/js_objects.asp', o:false },
  { id:17, name:'JS Events', link:"https://www.w3schools.com/js/js_events.asp", o:false },
  { id:18, name:'JS Strings', link:"https://www.w3schools.com/js/js_strings.asp", o:false },
  { id:19, name:'JS String Method', link:"https://www.w3schools.com/js/js_string_methods.asp", o:false },
  { id:20, name:'JS String Search', link:"https://www.w3schools.com/js/js_string_search.asp", o:false },
  { id:21, name:'JS String Templates', link:"https://www.w3schools.com/js/js_string_templates.asp", o:false },
  { id:22, name:'JS Numbers', link:"https://www.w3schools.com/js/js_numbers.asp", o:false },
  { id:23, name:'JS Number Methods', link:"https://www.w3schools.com/js/js_number_methods.asp", o:false },
  { id:24, name:'JS Array', link:"https://www.w3schools.com/js/js_arrays.asp", o:false },
  { id:25, name:'JS Array Method', link:"https://www.w3schools.com/js/js_array_methods.asp", o:false },
  { id:26, name:'JS Array Sort', link:"https://www.w3schools.com/js/js_array_sort.asp", o:false },
  { id:27, name:'JS Array Iteration', link:"https://www.w3schools.com/js/js_array_iteration.asp", o:false },
  { id:28, name:'JS Array Const', link:"https://www.w3schools.com/js/js_array_const.asp", o:false },
  { id:29, name:'JS Dates', link:"https://www.w3schools.com/js/js_dates.asp", o:false },
  { id:30, name:'JS Date Formate', link:"https://www.w3schools.com/js/js_date_formats.asp", o:false },
  { id:31, name:'JS Date Get Methods', link:"https://www.w3schools.com/js/js_date_methods.asp", o:false },
  { id:32, name:'JS Date Set Methods', link:"https://www.w3schools.com/js/js_date_methods_set.asp", o:false },
  { id:33, name:'JS Math', link:"https://www.w3schools.com/js/js_math.asp", o:false },
  { id:34, name:'JS Random', link:"https://www.w3schools.com/js/js_random.asp", o:false },
  { id:35, name:'JS booleans', link:"https://www.w3schools.com/js/js_booleans.asp", o:false },
  { id:36, name:'JS Comparisons', link:"https://www.w3schools.com/js/js_comparisons.asp", o:false },
  { id:37, name:'JS Conditions', link:"https://www.w3schools.com/js/js_if_else.asp", o:false },
  { id:38, name:'JS Switch', link:"https://www.w3schools.com/js/js_switch.asp", o:false },
  { id:39, name:'JS Loop For', link:"https://www.w3schools.com/js/js_loop_for.asp", o:false },
  { id:40, name:'JS Loop for In', link:"https://www.w3schools.com/js/js_loop_forin.asp", o:false },
  { id:41, name:'JS Loop For Of', link:"https://www.w3schools.com/js/js_loop_forof.asp", o:false },
  { id:42, name:'JS Loop While', link:"https://www.w3schools.com/js/js_loop_while.asp", o:false },
  { id:43, name:'JS Break', link:"https://www.w3schools.com/js/js_break.asp", o:false },
  { id:44, name:'JS Iterables', link:"https://www.w3schools.com/js/js_iterables.asp", o:false },
  { id:45, name:'JS Sets', link:"https://www.w3schools.com/js/js_sets.asp", o:false },
  { id:46, name:'JS Maps', link:"https://www.w3schools.com/js/js_maps.asp", o:false },
  { id:47, name:'JS Typeof', link:"https://www.w3schools.com/js/js_typeof.asp", o:false },
  { id:48, name:'JS Conversion', link:"https://www.w3schools.com/js/js_type_conversion.asp", o:false },
  { id:49, name:'JS Bitwise', link:"https://www.w3schools.com/js/js_bitwise.asp", o:false },
  { id:50, name:'JS RegExp', link:"https://www.w3schools.com/js/js_regexp.asp", o:false },
  { id:51, name:'JS Errors', link:"https://www.w3schools.com/js/js_errors.asp", o:false },
  { id:52, name:'JS Scope', link:"https://www.w3schools.com/js/js_scope.asp", o:false },
  { id:53, name:'JS Hosting', link:"https://www.w3schools.com/js/js_hoisting.asp", o:false },
  { id:54, name:'JS Mode', link:"https://www.w3schools.com/js/js_strict.asp", o:false },
  { id:55, name:'JS Keyword', link:"https://www.w3schools.com/js/js_this.asp", o:false },
  { id:56, name:'JS Arrow Function', link:"https://www.w3schools.com/js/js_arrow_function.asp", o:false },
  { id:57, name:'JS Classes', link:"https://www.w3schools.com/js/js_classes.asp", o:false },
  { id:58, name:'JS JSON', link:"https://www.w3schools.com/js/js_json.asp", o:false },
  { id:59, name:'JS Debugging', link:"https://www.w3schools.com/js/js_debugging.asp", o:false },
  { id:60, name:'JS ide', link:"https://www.w3schools.com/js/js_conventions.asp", o:false },
  { id:61, name:'JS Practices', link:"https://www.w3schools.com/js/js_best_practices.asp", o:false },
  { id:62, name:'JS Mistakes', link:"https://www.w3schools.com/js/js_mistakes.asp", o:false },
  { id:63, name:'JS Performance', link:"https://www.w3schools.com/js/js_performance.asp", o:false },
  { id:64, name:'JS Reserved Words', link:"https://www.w3schools.com/js/js_reserved.asp", o:false }   
]
const ES6Tutorial =[
  { id:1, name:'ES6 The let keyword', link:"https://www.w3schools.com/js/js_es6.asp#mark_let", o:false }, 
  { id:2, name:'ES6 The const keyword', link:"https://www.w3schools.com/js/js_es6.asp#mark_const", o:false }, 
  { id:3, name:'ES6 Arrow Functions', link:"https://www.w3schools.com/js/js_es6.asp#mark_arrow", o:false }, 
  { id:4, name:'ES6 For/of', link:"https://www.w3schools.com/js/js_es6.asp#mark_forof", o:false }, 
  { id:5, name:'ES6 Map Objects', link:"https://www.w3schools.com/js/js_es6.asp#mark_map", o:false }, 
  { id:6, name:'ES6 Set Objects', link:"https://www.w3schools.com/js/js_es6.asp#mark_set", o:false }, 
  { id:7, name:'ES6 Classes', link:"https://www.w3schools.com/js/js_es6.asp#mark_class", o:false }, 
  { id:8, name:'ES6  Promises', link:"https://www.w3schools.com/js/js_es6.asp#mark_promise", o:false }, 
  { id:9, name:'ES6 Symbol', link:"https://www.w3schools.com/js/js_es6.asp#mark_symbol", o:false },
  { id:10, name:'ES6 Default Parameters', link:"https://www.w3schools.com/js/js_es6.asp#mark_param", o:false }, 
  { id:11, name:'ES6 Function Rest Parameter', link:"https://www.w3schools.com/js/js_es6.asp#mark_rest", o:false }, 
  { id:12, name:'ES6 String.includes()', link:"https://www.w3schools.com/js/js_es6.asp#mark_includes", o:false }, 
  { id:13, name:'ES6 String.startsWith()', link:"https://www.w3schools.com/js/js_es6.asp#mark_includes", o:false }, 
  { id:14, name:'ES6 String.endsWith()', link:"https://www.w3schools.com/js/js_es6.asp#mark_endswith", o:false }, 
  { id:15, name:'ES6 Array.from()', link:"https://www.w3schools.com/js/js_es6.asp#mark_endswith", o:false }, 
  { id:16, name:'ES6 Array keys()', link:"https://www.w3schools.com/js/js_es6.asp#mark_endswith", o:false }, 
  { id:17, name:'ES6 Array find()', link:"https://www.w3schools.com/js/js_es6.asp#mark_array_find", o:false }, 
  { id:18, name:'ES6 Array findIndex()', link:"https://www.w3schools.com/js/js_es6.asp#mark_array_findIndex", o:false },
  { id:19, name:'ES6 New Math Methods', link:"https://www.w3schools.com/js/js_es6.asp#mark_math_methods", o:false },
  { id:20, name:'ES6 New Number Properties', link:"https://www.w3schools.com/js/js_es6.asp#mark_number_properties", o:false },
  { id:21, name:'ES6 New Number Methods', link:"https://www.w3schools.com/js/js_es6.asp#mark_number_methods", o:false },
  { id:22, name:'ES6 New Global Methods', link:"https://www.w3schools.com/js/js_es6.asp#mark_global_methods", o:false },

  { id:23, name:'React ES6 ', link:"https://www.w3schools.com/REACT/react_es6.asp", o:false }, 
  { id:24, name:'React ES6 Classes', link:"https://www.w3schools.com/REACT/react_es6_classes.asp", o:false }, 
  { id:25, name:'React ES6 Arrow Function', link:"https://www.w3schools.com/REACT/react_es6_arrow.asp", o:false }, 
  { id:26, name:'React ES6 Variables', link:"https://www.w3schools.com/REACT/react_es6_variables.asp", o:false }, 
  { id:27, name:'React ES6 Methods', link:"https://www.w3schools.com/REACT/react_es6_array_methods.asp", o:false }, 
  { id:28, name:'React ES6 Destrucuring', link:"https://www.w3schools.com/REACT/react_es6_destructuring.asp", o:false }, 
  { id:29, name:'React ES6 Spread Operator', link:"https://www.w3schools.com/REACT/react_es6_spread.asp", o:false }, 
  { id:30, name:'React ES6  Modules', link:"https://www.w3schools.com/REACT/react_es6_modules.asp", o:false }, 
  { id:31, name:'React ES6 Ternary Operator', link:"https://www.w3schools.com/REACT/react_es6_ternary.asp", o:false },
]
const ReactTutorial = [
  { id:1, heading:'INSTALLATION',name:'Getting Started ', link:'https://reactjs.org/docs/getting-started.html', o:true },
  { id:2, name:'Add React to a Website ', link:'https://reactjs.org/docs/add-react-to-a-website.html',  o:true },
  { id:3, name:'Create a New React App ', link:'https://reactjs.org/docs/create-a-new-react-app.html',  o:true },
  { id:4, name:'CDN Links ', link:'https://reactjs.org/docs/cdn-links.html',  o:true },
  { id:5, name:'Release Channels ', link:'https://reactjs.org/docs/release-channels.html',  o:true },
  { id:6, heading:'MAIN CONCEPTS', name:'Hello World', link:'https://reactjs.org/docs/hello-world.html',  o:true },
  { id:7, name:'Introducing JSX', link:'https://reactjs.org/docs/introducing-jsx.html',  o:true },
  { id:8, name:'Rendering Elements ', link:'https://reactjs.org/docs/rendering-elements.html',  o:true },
  { id:9, name:'Components and Props ', link:'https://reactjs.org/docs/components-and-props.html',  o:true },
  { id:10, name:'State and Lifecycle ', link:'https://reactjs.org/docs/state-and-lifecycle.html',  o:true },
  { id:11, name:'Handling Events ', link:'https://reactjs.org/docs/handling-events.html',  o:true },
  { id:12, name:'Conditional Rendering ', link:'https://reactjs.org/docs/conditional-rendering.html',  o:true },
  { id:13, name:'Lists and Keys ', link:'https://reactjs.org/docs/lists-and-keys.html',  o:true },
  { id:14, name:'Forms ', link:'https://reactjs.org/docs/forms.html',  o:true },
  { id:15, name:'Lifting State Up ', link:'https://reactjs.org/docs/lifting-state-up.html',  o:true },
  { id:16, name:'Composition vs Inheritance ', link:'https://reactjs.org/docs/composition-vs-inheritance.html',  o:true },
  { id:17, name:'Thinking In React ', link:'https://reactjs.org/docs/thinking-in-react.html',  o:true },
  { id:18, heading:'Advanced Guides', name:'Accessibility ', link:'https://reactjs.org/docs/accessibility.html',  o:true },
  { id:19, name:'Code-Splitting ', link:'https://reactjs.org/docs/code-splitting.html',  o:true },
  { id:20, name:'Context ', link:'https://reactjs.org/docs/context.html',  o:true },
  { id:21, name:'Error Boundaries ', link:'https://reactjs.org/docs/error-boundaries.html',  o:true },
  { id:22, name:'Forwarding Refs ', link:'https://reactjs.org/docs/forwarding-refs.html',  o:true },
  { id:23, name:'Fragments ', link:'https://reactjs.org/docs/fragments.html',  o:true },
  { id:24, name:'Higher-Order Components ', link:'https://reactjs.org/docs/higher-order-components.html',  o:true },
  { id:25, name:'Integrating with Other Libraries ', link:'https://reactjs.org/docs/integrating-with-other-libraries.html',  o:true },
  { id:26, name:'JSX In Depth ', link:'https://reactjs.org/docs/jsx-in-depth.html',  o:true },
  { id:27, name:'Optimizing Performance ', link:'https://reactjs.org/docs/optimizing-performance.html',  o:true },
  { id:28, name:'Portals ', link:'https://reactjs.org/docs/portals.html',  o:true },
  { id:29, name:'Profiler ', link:'https://reactjs.org/docs/profiler.html',  o:true },
  { id:30, name:'React Without ES6 ', link:'https://reactjs.org/docs/react-without-es6.html',  o:true },
  { id:31, name:'React Without JSX ', link:'https://reactjs.org/docs/react-without-jsx.html',  o:true },
  { id:32, name:'Reconciliation ', link:'https://reactjs.org/docs/reconciliation.html',  o:true },
  { id:33, name:'Refs and the DOM ', link:'https://reactjs.org/docs/refs-and-the-dom.html',  o:true },
  { id:34, name:'Render Props ', link:'https://reactjs.org/docs/render-props.html',  o:true },
  { id:35, name:'Static Type Checking ', link:'https://reactjs.org/docs/static-type-checking.html',  o:true },
  { id:36, name:'Strict Mode ', link:'https://reactjs.org/docs/strict-mode.html',  o:true },
  { id:37, name:'Typechecking With PropTypes ', link:'https://reactjs.org/docs/typechecking-with-proptypes.html',  o:true },
  { id:38, name:'Uncontrolled Components ', link:'https://reactjs.org/docs/uncontrolled-components.html',  o:true },
  { id:39, name:'Web Components ', link:'https://reactjs.org/docs/web-components.html',  o:true },
  { id:40, heading:'API REFERENCE', name:'React ', link:'https://reactjs.org/docs/react-api.html',  o:true },
  { id:41, name:'React.Component ', link:'https://reactjs.org/docs/react-component.html',  o:true },
  { id:42, name:'ReactDOM ', link:'https://reactjs.org/docs/react-dom.html',  o:true },
  { id:43, name:'ReactDOMServer ', link:'https://reactjs.org/docs/react-dom-server.html',  o:true },
  { id:44, name:'DOM Elements ', link:'https://reactjs.org/docs/dom-elements.html',  o:true },
  { id:45, name:'SyntheticEvent ', link:'https://reactjs.org/docs/events.html',  o:true },
  { id:46, name:'Test Utilities ', link:'https://reactjs.org/docs/test-utils.html',  o:true },
  { id:47, name:'Test Renderer ', link:'https://reactjs.org/docs/test-renderer.html',  o:true },
  { id:48, name:'JS Environment Requirements ', link:'https://reactjs.org/docs/javascript-environment-requirements.html',  o:true },
  { id:49, name:'Glossary', link:'https://reactjs.org/docs/glossary.html',  o:true },
  { id:50, heading:'HOOKS', name:'Introducing Hooks ', link:'https://reactjs.org/docs/hooks-intro.html',  o:true },
  { id:51, name:'Hooks at a Glance ', link:'https://reactjs.org/docs/hooks-overview.html',  o:true },
  { id:52, name:'Using the State Hook', link:'https://reactjs.org/docs/hooks-state.html',  o:true },
  { id:53, name:'Using the Effect Hook ', link:'https://reactjs.org/docs/hooks-effect.html',  o:true },
  { id:54, name:'Rules of Hooks', link:'https://reactjs.org/docs/hooks-rules.html',  o:true },
  { id:55, name:'Building Your Own Hooks ', link:'https://reactjs.org/docs/hooks-custom.html',  o:true },
  { id:56, name:'Hooks API Reference', link:'https://reactjs.org/docs/hooks-reference.html',  o:true },
  { id:57, name:' Hooks FAQ ', link:'https://reactjs.org/docs/hooks-faq.html',  o:true },
  { id:58, heading:'TESTING', name:'Testing Overview ', link:'https://reactjs.org/docs/testing.html',  o:true },
  { id:59, name:'Testing Recipes ', link:'https://reactjs.org/docs/testing-recipes.html',  o:true },
  { id:60, name:'Testing Environments ', link:'https://reactjs.org/docs/testing-environments.html',  o:true },
  { id:61, heading:'CONTRIBUTING', name:'How to Contribute', link:'https://reactjs.org/docs/how-to-contribute.html',  o:true },
  { id:62, name:'Codebase Overview ', link:'https://reactjs.org/docs/codebase-overview.html',  o:true },
  { id:63, name:'Implementation Notes ', link:'https://reactjs.org/docs/implementation-notes.html',  o:true },
  { id:64, name:'Design Principles', link:'https://reactjs.org/docs/design-principles.html',  o:true },
  { id:65, heading:'FAQ', name:'AJAX and APIs ', link:'https://reactjs.org/docs/faq-ajax.html',  o:true },
  { id:66, name:'Babel, JSX, and Build Steps ', link:'https://reactjs.org/docs/faq-build.html',  o:true },
  { id:67, name:'Passing Functions to Components ', link:'https://reactjs.org/docs/faq-functions.html',  o:true },
  { id:68, name:'Component State ', link:'https://reactjs.org/docs/faq-state.html',  o:true },
  { id:69, name:'Styling and CSS ', link:'https://reactjs.org/docs/faq-styling.html',  o:true },
  { id:70, name:'File Structure ', link:'https://reactjs.org/docs/faq-structure.html',  o:true },
  { id:71, name:'Versioning Policy ', link:'https://reactjs.org/docs/faq-versioning.html',  o:true },
  { id:72, name:'Virtual DOM and Internals ', link:'https://reactjs.org/docs/faq-internals.html',  o:true },

  
  // { id:1, name:'React Home', link:"https://www.w3schools.com/REACT/default.asp", o:false },
  // { id:2, name:'React Introduction', link:"https://www.w3schools.com/REACT/react_intro.asp", o:false },
  // { id:3, name:'React Get Started', link:"https://www.w3schools.com/REACT/react_getstarted.asp", o:false },
  // { id:4, name:'React Render HTML', link:"https://www.w3schools.com/REACT/react_render.asp", o:false },
  // { id:5, name:'React JSX', link:"https://www.w3schools.com/REACT/react_jsx.asp", o:false },
  // { id:6, name:'React Components', link:"https://www.w3schools.com/REACT/react_components.asp", o:false },
  // { id:7, name:'React Class', link:"https://www.w3schools.com/REACT/react_class.asp", o:false },
  // { id:8, name:'React Props', link:"https://www.w3schools.com/REACT/react_props.asp", o:false },
  // { id:9, name:'React Events', link:"https://www.w3schools.com/REACT/react_events.asp", o:false },
  // { id:10, name:'React Conditionals', link:"https://www.w3schools.com/REACT/react_conditional_rendering.asp", o:false },
  // { id:11, name:'React Lists', link:"https://www.w3schools.com/REACT/react_lists.asp", o:false },
  // { id:12, name:'React Forms', link:"https://www.w3schools.com/REACT/react_forms.asp", o:false },
  // { id:13, name:'React Router', link:"https://www.w3schools.com/REACT/react_router.asp", o:false },
  // { id:14, name:'React Memo', link:"https://www.w3schools.com/REACT/react_memo.asp", o:false },
  // { id:15, name:'React Css Styling', link:"https://www.w3schools.com/REACT/react_css_styling.asp", o:false },
  // { id:16, name:'React Sass Styling', link:"https://www.w3schools.com/REACT/react_sass_styling.asp", o:false },
  // { id:17, name:'What is a Hook?', link:"https://www.w3schools.com/REACT/react_hooks.asp", o:false },
  // { id:18, name:'React useState', link:"https://www.w3schools.com/REACT/react_usestate.asp", o:false },
  // { id:19, name:'React useEffect', link:"https://www.w3schools.com/REACT/react_useeffect.asp", o:false },
  // { id:20, name:'React useContext', link:"https://www.w3schools.com/REACT/react_usecontext.asp", o:false },
  // { id:21, name:'React useRef', link:"https://www.w3schools.com/REACT/react_useref.asp", o:false },
  // { id:22, name:'React useReducer', link:"https://www.w3schools.com/REACT/react_usereducer.asp", o:false },
  // { id:23, name:'React useCallback', link:"https://www.w3schools.com/REACT/react_usecallback.asp", o:false },
  // { id:24, name:'React useMemo', link:"https://www.w3schools.com/REACT/react_usememo.asp", o:false },
  // { id:25, name:'React Custom Hooks', link:"https://www.w3schools.com/REACT/react_customhooks.asp", o:false },
  // { id:26, name:'React Quiz', link:"https://www.w3schools.com/REACT/react_quiz.asp", o:false },
  // { id:27, name:'React Exercise', link:"https://www.w3schools.com/REACT/react_exercises.asp", o:false},

]
const ReactNativeTutorial=[
  { id:0,name:'Setup For React Native ', link:'https://reactnative.dev/docs/environment-setup', o:true },
  { id:1, heading:'ReactNative Basics', name:'Introduction', link:'https://reactnative.dev/docs/getting-started', o:false },
  { id:2, name:'Core Components / Native Components', link:'https://reactnative.dev/docs/intro-react-native-components', o:false },
  { id:3, name:'React Fundamental', link:'https://reactnative.dev/docs/intro-react', o:false },
  { id:4, name:'Home Handling Text Input', link:'https://reactnative.dev/docs/handling-text-input', o:false },
  { id:5, name:'Using a Scroll View', link:'https://reactnative.dev/docs/using-a-scrollview', o:false },
  { id:6, name:'Using List Views', link:'https://reactnative.dev/docs/using-a-listview', o:false },
  { id:7, name:'Troubleshooting', link:'https://reactnative.dev/docs/troubleshooting', o:false },
  { id:8, name:'Platform Specific Code', link:'https://reactnative.dev/docs/platform-specific-code', o:false },
  { id:9, name:'More Resources', link:'https://reactnative.dev/docs/more-resources', o:false },
  { id:10, heading:'ReactNative Environment Setup', name:'Setting up the development environment', link:'https://reactnative.dev/docs/environment-setup', o:false },
  { id:11, name:'Integration with Existing Apps', link:'https://reactnative.dev/docs/integration-with-existing-apps', o:false },
  { id:12, name:'Integration with an Android Fragment', link:'https://reactnative.dev/docs/integration-with-android-fragment', o:false },
  { id:13, name:'Building for TV Devices', link:'https://reactnative.dev/docs/building-for-tv', o:false },
  { id:14, name:'Out-of-Tree Platforms', link:'https://reactnative.dev/docs/out-of-tree-platforms', o:false },
  { id:15, heading:'ReactNative Workflow', name:'Running On Devices', link:'https://reactnative.dev/docs/running-on-device', o:false },
  { id:16, name:'Fast Refresh ', link:'https://reactnative.dev/docs/fast-refresh', o:false },
  { id:17, name:'Debugging', link:'https://reactnative.dev/docs/debugging', o:false },
  { id:18, name:'Symbolication a stack trace', link:'https://reactnative.dev/docs/symbolication', o:false },
  { id:19, name:'Testing', link:'https://reactnative.dev/docs/testing-overview', o:false },
  { id:20, name:'Using Libraries', link:'https://reactnative.dev/docs/libraries', o:false },
  { id:21, name:'Using TypeScript', link:'https://reactnative.dev/docs/typescript', o:false },
  { id:22, name:'Upgrading to new versions', link:'https://reactnative.dev/docs/upgrading', o:false },
  { id:23, heading:'ReactNative Design', name:'Style', link:'https://reactnative.dev/docs/style', o:false },
  { id:24, name:'Height and Width', link:'https://reactnative.dev/docs/height-and-width', o:false },
  { id:25, name:'Layout with Flexbox', link:'https://reactnative.dev/docs/flexbox', o:false },
  { id:26, name:'Images', link:'https://reactnative.dev/docs/images', o:false },
  { id:27, name:'Color Reference', link:'https://reactnative.dev/docs/colors', o:false },
  { id:28, heading:'ReactNative Interation', name:'Handling Touches', link:'https://reactnative.dev/docs/handling-touches', o:false },
  { id:29, name:'Navigation Between Screens', link:'https://reactnative.dev/docs/navigation', o:false },
  { id:30, name:'Animations', link:'https://reactnative.dev/docs/animations', o:false },
  { id:31, name:'Gesture Responder System', link:'https://reactnative.dev/docs/gesture-responder-system', o:false },
  { id:32, heading:'ReactNative Inclusion', name:'Accessibility', link:'https://reactnative.dev/docs/accessibility', o:false },
  { id:33, heading:'ReactNative Performance', name:'Performance Overview', link:'https://reactnative.dev/docs/performance', o:false },
  { id:34, name:'Optimizing Flatlist Configuration', link:'https://reactnative.dev/docs/optimizing-flatlist-configuration', o:false },
  { id:35, name:'RAM Bundles and Inline Requires', link:'https://reactnative.dev/docs/ram-bundles-inline-requires', o:false },
  { id:36, name:'Profiling', link:'https://reactnative.dev/docs/profiling', o:false },
  { id:37, name:'Profiling with Hermes', link:'https://reactnative.dev/docs/profile-hermes', o:false },
  { id:38, heading:'ReactNative JavaScript Runtime', name:'JavaScript Environment', link:'https://reactnative.dev/docs/javascript-environment', o:false },
  { id:39, name:'Timers', link:'https://reactnative.dev/docs/timers', o:false },
  { id:40, name:'Using Hermes', link:'https://reactnative.dev/docs/hermes', o:false },
  { id:41, heading:'ReactNative Connectivity', name:'Networking', link:'https://reactnative.dev/docs/network', o:false },
  { id:42, name:'Security', link:'https://reactnative.dev/docs/security', o:false },
  { id:43, heading:'ReactNative Native Modules Intro', name:'Native Modules Intro', link:'https://reactnative.dev/docs/native-modules-intro', o:false },
  { id:44, name:'Android Native Modules', link:'https://reactnative.dev/docs/native-modules-android', o:false },
  { id:45, name:'IOS Native Modules', link:'https://reactnative.dev/docs/native-modules-ios', o:false },
  { id:46, name:'Native Modules NPM Package Setup', link:'https://reactnative.dev/docs/native-modules-setup', o:false },
  { id:47, heading:'ReactNative Native Components', name:'Android Native UI Components', link:'https://reactnative.dev/docs/native-components-android', o:false },
  { id:48, name:'IOS Native UI Components', link:'https://reactnative.dev/docs/native-components-ios', o:false },
  { id:49, name:'Direct Manipulation', link:'https://reactnative.dev/docs/direct-manipulation', o:false },
  { id:50, heading:'ReactNative Guides (Android)', name:'Headless JS', link:'https://reactnative.dev/docs/headless-js-android', o:false },
  { id:51, name:'Publishing to Google Play Store', link:'https://reactnative.dev/docs/signed-apk-android', o:false },
  { id:52, heading:'ReactNative Guides (IOS)', name:'Linking Libraries', link:'https://reactnative.dev/docs/linking-libraries-ios', o:false },
  { id:53, name:'Running On Simulator', link:'https://reactnative.dev/docs/running-on-simulator-ios', o:false },
  { id:54, name:'Communication between native and React Native', link:'https://reactnative.dev/docs/communication-ios', o:false },
  { id:55, name:'App Extensions', link:'https://reactnative.dev/docs/app-extensions', o:false },
  { id:56, name:'Publishing to Apple App Store', link:'https://reactnative.dev/docs/publishing-to-app-store', o:false },
  { id:57, heading:'Core Components', name:'Core Components and APIs', link:'https://reactnative.dev/docs/next/components-and-apis', o:false },
  { id:58, name:'ActivityIndicator', link:'https://reactnative.dev/docs/next/activityindicator', o:false },
  { id:59, name:'Button', link:'https://reactnative.dev/docs/next/button', o:false }, 
  { id:60, name:'Flatlist', link:'https://reactnative.dev/docs/next/flatlist', o:false },
  { id:61, name:'Image', link:'https://reactnative.dev/docs/next/image', o:false },
  { id:62, name:'ImageBackground', link:'https://reactnative.dev/docs/next/imagebackground', o:false },
  { id:63, name:'keyboard Avoiding View', link:'https://reactnative.dev/docs/next/keyboardavoidingview', o:false },
  { id:64, name:'Modal', link:'https://reactnative.dev/docs/next/modal', o:false },
  { id:65, name:'Pressable (NEW)', link:'https://reactnative.dev/docs/next/pressable', o:false },
  { id:66, name:'Refresh Control', link:'https://reactnative.dev/docs/next/refreshcontrol', o:false },
  { id:67, name:'ScrollView', link:'https://reactnative.dev/docs/next/scrollview', o:false },
  { id:68, name:'SectionList', link:'https://reactnative.dev/docs/next/sectionlist', o:false },
  { id:69, name:'StatusBar', link:'https://reactnative.dev/docs/next/statusbar', o:false },
  { id:70, name:'Switch', link:'https://reactnative.dev/docs/next/switch', o:false },
  { id:71, name:'Text', link:'https://reactnative.dev/docs/next/text', o:false },
  { id:72, name:'TextInput', link:'https://reactnative.dev/docs/next/textinput', o:false },
  { id:73, name:'TouchableHighlight', link:'https://reactnative.dev/docs/next/touchablehighlight', o:false },
  { id:74, name:'TouchableOpacity', link:'https://reactnative.dev/docs/next/touchableopacity', o:false }, 
  { id:75, name:'TouchableWithoutFeedback', link:'https://reactnative.dev/docs/next/touchablewithoutfeedback', o:false },
  { id:76, name:'View', link:'https://reactnative.dev/docs/next/view', o:false },
  { id:77, name:'VirtualizedList', link:'https://reactnative.dev/docs/next/virtualizedlist', o:false },
  { id:78, name:'Android Component DrawerLayoutAndroid', link:'https://reactnative.dev/docs/next/drawerlayoutandroid', o:false },
  { id:79, name:'Andorid Component TouchableNativeFeedback', link:'https://reactnative.dev/docs/next/touchablenativefeedback', o:false },
  { id:80, name:'IOS Components InputAccessoryView', link:'https://reactnative.dev/docs/next/inputaccessoryview', o:false }, 
  { id:81, name:'IOS Components SafeAreaView', link:'https://reactnative.dev/docs/next/safeareaview', o:false },
  { id:82, heading:'Props', name:'Image Style Props', link:'https://reactnative.dev/docs/next/image-style-props', o:false },
  { id:83, name:'Layout Props', link:'https://reactnative.dev/docs/next/layout-props', o:false },
  { id:84, name:'Shadow Props', link:'https://reactnative.dev/docs/next/shadow-props', o:false },
  { id:85, name:'Test Style Props', link:'https://reactnative.dev/docs/next/text-style-props', o:false },
  { id:86, name:'View Style Props', link:'https://reactnative.dev/docs/next/view-style-props', o:false }, 
  { id:87, heading:'Object Types', name:'LayoutEvent Object Type', link:'https://reactnative.dev/docs/next/layoutevent', o:false },
  { id:88, name:'PressEvent Object Type', link:'https://reactnative.dev/docs/next/pressevent', o:false },
  { id:89, name:'React Node Object Type', link:'https://reactnative.dev/docs/next/react-node', o:false },
  { id:90, name:'React Object Type', link:'https://reactnative.dev/docs/next/rect', o:false },
  { id:91, name:'ViewToken Object Type', link:'https://reactnative.dev/docs/next/viewtoken', o:false },
  
];
const ReduxTutorial=[
    { id:0,heading:'Redux in React',name:'Redux use in React', link:'https://www.javatpoint.com/react-redux#:~:text=%20The%20main%20reason%20to%20use%20React%20Redux,components%20re-render%20only%20when%20it%20actually...%20More%20', o:false },
    { id:1,heading:'Redux in React native',name:'Redux use in React Native', link:'https://medium.com/@imranhishaam/react-native-with-redux-for-beginners-6281959a2899', o:false },
]


const Item = (props) =>{ 
  const [Open,setOpen]=useState(false);
  return(
    <View>
     { props.heading?(
      <View style={{ alignItems:'center',marginHorizontal:30,paddingVertical:10 }}>
        <Text style={[styles.title,{color:"#000"}]}>{props.heading}</Text>
      </View>):null}
      <View style={[styles.item,props.id%2?{backgroundColor:"#fff"}:{backgroundColor:"#26619c"}]}>
      
      <TouchableWithoutFeedback onPress={()=>(setOpen(Open?false:true))} >
        <View style={{flexDirection:'row'}}>
        <View style={{ flex:9,alignItems:'center',marginHorizontal:30 }}>
            <Text style={[styles.title,props.id%2?{color:"#26619c"}:{color:"#fff"}]}>{props.title}</Text>
          </View>
          <View style={{flex:1  }}>
            <Text style={[props.id%2?{color:"#26619c"}:{color:"#fff"},{fontSize:20}]}><Icon name="arrowdown" size={30} color="#000" /></Text>
        </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <Defination navigation={props.navigation} id={props.id} defination={props.defination} title={props.title} link={props.link} open={Open} />
    </View>
    
    
  )
}
const Defination = (props) => (
  props.open?
    <View style={styles.defItem}>
      <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('TutorialDetailScreen',{name:props.defination,link:props.link})}>
       <Text style={styles.defTitle}>{'Click Here To See Of '+props.defination}</Text>
       </TouchableWithoutFeedback>
    </View>
  :null
  
);
const Tutorial = (props) => {
  const renderItem = ({ item }) => (
    <View>
       <Item navigation={props.navigation} id={item.id} title={item.name} defination={item.name} open={item.o} link={item.link} heading={item.heading}/>
    </View>
   
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={
           props.title=='JavaScript'?JavaScriptTutorial 
          :props.title=='ES-6'?ES6Tutorial
          :props.title=='React'?ReactTutorial
          :props.title=='Redux'?ReduxTutorial
          :props.title=='React Native'?ReactNativeTutorial
          :null}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    paddingVertical:10
    
  },
  title: {
    fontSize: 17,
    alignItems:'center',
    fontWeight:'600'

   },
  defTitle:{
      fontSize:14,
      color:'#26619c',
      lineHeight:20,
      fontWeight:'400'
  },
  defItem:{
    backgroundColor: '#fff',
    padding:14
  }
});

export default Tutorial;