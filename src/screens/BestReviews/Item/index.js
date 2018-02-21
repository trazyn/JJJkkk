
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import PhotoView from '@merryjs/photo-viewer';
import {
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import classes from './classes';
import formatTime from 'utils/formatTime';
import randomeAvatar from 'utils/randomeAvatar';
import FadeImage from 'ui/FadeImage';
import Rate from 'ui/Rate';

export default class Item extends Component {
    static propTypes = {
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        stars: PropTypes.array.isRequired,
        tags: PropTypes.array.isRequired,
        reviews: PropTypes.array.isRequired,
        trailler: PropTypes.object,
    };

    state = {
        index: 0,
        showPreview: false,
    }

    togglePreview(showPreview, index = 0) {
        this.setState({
            index,
            showPreview,
        });

        StatusBar.setHidden(true);
    }

    renderPreviews() {
        var { previews } = this.props;

        return previews.slice(0, 4).map((e, index) => {
            if (index === 3) {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={e => this.togglePreview(true, index)}
                    >
                        <FadeImage
                            {...{
                                resizeMode: 'cover',
                                source: {
                                    uri: e.small,
                                },
                                style: classes.preview,
                            }}
                        >
                            <View style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, .6)',
                                zIndex: 1,
                            }}>
                                <Text style={classes.morePreview}>
                                    {previews.length > 9 ? '9+' : previews.length}
                                </Text>
                            </View>
                        </FadeImage>
                    </TouchableOpacity>
                );
            }

            return (
                <TouchableOpacity
                    key={index}
                    onPress={e => this.togglePreview(true, index)}
                >
                    <FadeImage
                        {...{
                            source: {
                                uri: e.small,
                            },
                            style: classes.preview,
                        }}
                    />
                </TouchableOpacity>
            );
        });
    }

    renderStars() {
        var { stars, navigator } = this.props;

        return stars.slice(0, 3).map((e, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={ev => {
                        navigator.showModal({
                            screen: 'zzyzx.ListByStar',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                            passProps: {
                                params: e
                            }
                        });
                    }}
                >
                    <FadeImage
                        {...{
                            showLoading: true,
                            resizeMode: 'cover',
                            source: {
                                uri: e.image || randomeAvatar(),
                            },
                            style: classes.star,
                        }}
                    >
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                            style={classes.starMask}
                        >
                            <Text style={classes.starName}>{e.name}</Text>
                        </LinearGradient>
                    </FadeImage>
                </TouchableOpacity>
            );
        });
    }

    renderTags() {
        var { tags, navigator } = this.props;

        return tags.map((e, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={classes.tag}
                    onPress={ev => {
                        navigator.showModal({
                            screen: 'zzyzx.ListByTag',
                            navigatorStyle: {
                                navBarHidden: true,
                            },
                            passProps: {
                                params: e
                            }
                        });
                    }}
                >
                    <Text style={classes.tagName}>{e.name}</Text>
                </TouchableOpacity>
            );
        });
    }

    renderReviews() {
        var { reviews } = this.props;

        return reviews.map((e, index) => {
            return (
                <View
                    key={index}
                    style={classes.review}
                >
                    <Text style={classes.reviewContent}>{e.content}</Text>
                    <View style={{
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                    }}>
                        <View style={classes.reviewMeta}>
                            <Text style={classes.reviewMetaText}>{moment(e.date).fromNow()} | {e.username}</Text>
                        </View>
                    </View>
                </View>
            );
        });
    }

    render() {
        var { no, cover, title, date, length, rate, text, stars, trailler, previews, onScroll } = this.props;

        return (
            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    style={classes.container}
                    onScroll={e => onScroll(e)}
                >
                    <View style={classes.hero}>
                        <FadeImage
                            {...{
                                showLoading: true,
                                source: {
                                    uri: cover,
                                },
                                style: classes.background,
                                containerStyle: {
                                    transform: [
                                        {
                                            translateX: -215,
                                        }
                                    ],
                                },
                            }}
                        />

                        <View style={classes.mask}>
                            <View style={classes.text}>
                                <Text
                                    style={classes.title}
                                    ellipsizeMode="tail"
                                    numberOfLines={3}
                                >
                                    {title.toUpperCase()}
                                </Text>

                                <View style={classes.line} />

                                <Text
                                    style={classes.bestreview}
                                    ellipsizeMode="tail"
                                    numberOfLines={4}
                                >
                                    {text}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={classes.body}>
                        <Text style={classes.header}>{title}</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Text style={classes.meta}>
                                {new Date(date).getFullYear()} | {formatTime(length)}
                            </Text>

                            <Rate rate={rate} />
                        </View>

                        <View
                            style={[
                                classes.videoAndPhoto,
                                // Hide the section when previews and trailler is empty
                                previews.length === 0 && !trailler && { display: 'none' }
                            ]}
                        >
                            <Text style={classes.subheader}>Video and Photo</Text>
                            {
                                trailler && (
                                    <FadeImage
                                        {...{
                                            resizeMode: 'cover',
                                            source: {
                                                uri: trailler.cover || cover,
                                            },
                                            style: classes.traillerCover,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={classes.playTrailler}
                                            onPress={e => this.props.navigator.push({
                                                screen: 'zzyzx.VideoPlayer',
                                                navigatorStyle: {
                                                    navBarHidden: true,
                                                },
                                                passProps: {
                                                    params: {
                                                        uri: trailler.src,
                                                    }
                                                },
                                            })}
                                        >
                                            <Icon name="ios-play" size={14} color="#000" />
                                        </TouchableOpacity>
                                    </FadeImage>
                                )
                            }
                            <View style={classes.previews}>
                                {
                                    this.renderPreviews()
                                }
                            </View>

                            {
                                trailler && (
                                    <TouchableOpacity
                                        style={classes.watchButton}
                                        onPress={e => {
                                            this.props.navigator.push({
                                                screen: 'zzyzx.VideoPlayer',
                                                navigatorStyle: {
                                                    navBarHidden: true,
                                                },
                                                passProps: {
                                                    params: {
                                                        no
                                                    }
                                                },
                                            });
                                        }}
                                    >
                                        <Text style={classes.watchText}>
                                            WATCH NOW
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>

                        <View style={{
                            display: stars.length === 0 ? 'none' : 'flex',
                        }}>
                            <Text style={classes.subheader}>Stars</Text>
                            <View style={classes.stars}>
                                {
                                    this.renderStars()
                                }
                            </View>
                        </View>

                        <View>
                            <Text style={classes.subheader}>Tags</Text>
                            <View style={classes.tags}>
                                {
                                    this.renderTags()
                                }
                            </View>
                        </View>

                        <View>
                            <Text style={classes.subheader}>Reviews</Text>
                            <View style={classes.reviews}>
                                {
                                    this.renderReviews()
                                }
                            </View>
                        </View>
                    </View>

                    <View style={classes.footer}>
                        <Image {...{
                            source: require('images/logo.png'),
                            style: {
                                height: 32,
                                width: 32,
                            },
                        }} />
                    </View>
                </ScrollView>

                <PhotoView
                    hideCloseButton={true}
                    hideShareButton={true}
                    visible={this.state.showPreview}
                    data={previews.map(e => ({ source: { uri: e.large } }))}
                    hideStatusBar={true}
                    initial={this.state.index}
                    onDismiss={e => {
                        this.togglePreview(false);
                    }}
                />
            </View>
        );
    }
}
