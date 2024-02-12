import style from './name.module.css';

const Name = () => {
    return (
        <div className={style.name__wrp}>
            <div className={`${style.name} ${style.first__name}`}>
                <span className={`${style.letters} ${style.first__name__e}`}>e</span>
                <span className={`${style.letters} ${style.first__name__b}`}>b</span>
                <span className={`${style.letters} ${style.first__name__u}`}>u</span>
                <span className={`${style.letters} ${style.first__name__k}`}>k</span>
                <span className={`${style.letters} ${style.first__name__a}`}>a</span>
            </div>
            <div className={`${style.name} ${style.middle__name}`}>
                <span className={`${style.letters} ${style.middle__name__s}`}>s</span>
                <span className={`${style.letters} ${style.middle__name__t}`}>t</span>
                <span className={`${style.letters} ${style.middle__name__e}`}>e</span>
                <span className={`${style.letters} ${style.middle__name__p}`}>p</span>
                <span className={`${style.letters} ${style.middle__name__h}`}>h</span>
                <span className={`${style.letters} ${style.middle__name__ee}`}>e</span>
                <span className={`${style.letters} ${style.middle__name__n}`}>n</span>
            </div>
            <div className={`${style.name} ${style.last__name}`}>
                <span className={`${style.letters} ${style.last__name__u}`}>u</span>
                <span className={`${style.letters} ${style.last__name__z}`}>z</span>
                <span className={`${style.letters} ${style.last__name__o}`}>o</span>
                <span className={`${style.letters} ${style.last__name__m}`}>m</span>
                <span className={`${style.letters} ${style.last__name__a}`}>a</span>
            </div>
        </div>
    );
}
 
export default Name;