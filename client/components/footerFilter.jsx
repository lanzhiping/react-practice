
const FooterFilter = ({onCompletedFilter, onUndoneFilter}) => (
    <div className="footer">
        <button
            className="footer-filter"
            onClick={onCompletedFilter}>show completed</button>
        <button
            className="footer-filter"
            onClick={onUndoneFilter}>show undone</button>
    </div>
);

FooterFilter.propTypes = {
    onUndoneFilter: PropTypes.func.isRequired,
    onCompletedFilter: PropTypes.func.isRequired
}


export default FooterFilter;
