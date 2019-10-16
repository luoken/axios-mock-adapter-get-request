import MockAdapter from 'axios-mock-adapter';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
export const mockAxios = new MockAdapter(axios);
