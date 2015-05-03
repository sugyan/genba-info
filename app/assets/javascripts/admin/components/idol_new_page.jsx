class IdolNewPage extends React.Component {
    static get propTypes() {
        return {
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>アイドル新規登録</h3>
              <IdolForm {...this.props.form}/>
              <hr/>
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
