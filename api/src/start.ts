import { MainApp } from './MainApp';

try {
    new MainApp().start();
} catch (error) {
    console.error('');
    console.error('{.".} >-----------------------------');
    console.error(error);
    console.error(`{.".} >-----------------------------`);
    console.error('');
    process.exit(1);
}
